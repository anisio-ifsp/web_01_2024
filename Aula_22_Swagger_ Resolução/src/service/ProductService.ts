import { ProductEntity } from "../model/entity/ProductEntity";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    async cadastrarProduto(produtoData: any): Promise<ProductEntity> {
        const { name, price, expirationDate } = produtoData;
        
        const produto = new ProductEntity(undefined, name, price, expirationDate)

        const novoProduto =  await this.productRepository.insertProduct(produto);
        console.log("Service - Insert ", novoProduto);
        return novoProduto;
    }

    async atualizarProduto(produtoData: any): Promise<ProductEntity> {
        const { id, name, price, expirationDate } = produtoData;

        const produto = new ProductEntity(id, name, price, expirationDate)

        await this.productRepository.updateProduct(produto);
        console.log("Service - Update ", produto);
        return produto;
    }

    async deletarProduto(produtoData: any): Promise<ProductEntity> {
        const { id, name, price, expirationDate } = produtoData;

        const produto = new ProductEntity(id, name, price, expirationDate)

        await this.productRepository.deleteProduct(produto);
        console.log("Service - Delete ", produto);
        return produto;
    }

    async filtrarProdutoById(produtoData: any): Promise<ProductEntity> {
        const idNumber = parseInt(produtoData, 10);

        const produto =  await this.productRepository.filterProductById(idNumber);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async filtrarProdutoByName(produtoData: any): Promise<ProductEntity[]> {
        const name:string = produtoData;

        const produtos =  await this.productRepository.filterProductByName(name);
        console.log("Service - Filtrar", produtos);
        return produtos;
    }

    async listarTodosProdutos(): Promise<ProductEntity[]> {
        const produtos =  await this.productRepository.filterAllProduct();
        console.log("Service - Filtrar Todos", produtos);
        return produtos;
    }

}