import { Body, Controller, Post, Res, Route, Tags, TsoaResponse } from "tsoa";
import { CategoriaService } from "../service/CategoriaService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";

@Route("categoria")
@Tags("Categoria")
export class CategoriaController extends Controller{

    categoriaService = new CategoriaService();

    @Post()
    async cadastrarCategoria(
        @Body() dto:{nome:string},
        @Res() fail: TsoaResponse<400, BasicResponseDto>,
        @Res() success: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const categoria = await this.categoriaService.cadastrarCategoria(dto);
            return success(201, new BasicResponseDto("Categoria criada com sucesso!", categoria));
        } catch (error: any) {
            return fail(400, new BasicResponseDto( error.message, undefined ));
        }
    }

}