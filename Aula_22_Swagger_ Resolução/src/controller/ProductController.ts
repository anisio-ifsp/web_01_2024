import { ProductService } from "../service/ProductService";
import { Body, Controller, Delete, Get, Path, Post, Put, Query, Res, Route, Tags, TsoaResponse } from "tsoa";
import { ProductRequestDto } from "../model/dto/ProductRequestDto";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ProductDto } from "../model/dto/ProductDto";
import { ProductEntity } from "../model/entity/ProductEntity";

@Route("product")
@Tags("Product")
export class ProductController extends Controller {
    productService = new ProductService();

    @Post()
    async cadastrarProduto(
        @Body() dto: ProductRequestDto,
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.cadastrarProduto(dto);
            return success(201, new BasicResponseDto("Produto criado com sucesso!", product));
        } catch (error: any) {
            return fail(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Put()
    async atualizarProduto(
        @Body() dto: ProductDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.atualizarProduto(dto);
            return success(200, new BasicResponseDto("Produto atualizado com sucesso!", product));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Delete()
    async deletarProduto(
        @Body() dto: ProductDto,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.deletarProduto(dto);
            return success(200, new BasicResponseDto("Produto deletado com sucesso!", product));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("id/{id}")
    async filtrarProdutoPorId(
        @Path() id: number,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const product = await this.productService.filtrarProdutoById(id);
            return success(200, new BasicResponseDto("Produto encontrado!", product));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get()
    async filtrarProdutoPorNome(
        @Query() name: string,
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const products: ProductEntity[] = await this.productService.filtrarProdutoByName(name);
            return success(200, new BasicResponseDto("Produto encontrado!", products));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }

    @Get("all")
    async listarTodosProduto(
        @Res() notFound: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const products: ProductEntity[] = await this.productService.listarTodosProdutos();
            return success(200, new BasicResponseDto("Produtos listados com sucesso!", products));
        } catch (error: any) {
            return notFound(400, new BasicResponseDto(error.message, undefined));
        }
    }
}