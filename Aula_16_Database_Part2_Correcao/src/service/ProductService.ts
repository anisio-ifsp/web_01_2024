import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    async cadastrarProduto(produtoData: any): Promise<Product> {
        const { name, price } = produtoData;
        if(!name || !price ){
            throw new Error("Informações incompletas");
        }

        const novoProduto =  await this.productRepository.insertProduct(name, price);
        console.log("Service - Insert ", novoProduto);
        return novoProduto;
    }

    async atualizarProduto(produtoData: any): Promise<Product> {
        const { id, name, price } = produtoData;
        if(!name || !price || !id ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.updateProduct(id,name, price);
        console.log("Service - Update ", produto);
        return produto;
    }

    async deletarProduto(produtoData: any): Promise<Product> {
        const { id, name, price } = produtoData;
        if(!name || !price || !id ){
            throw new Error("Informações incompletas");
        }

        const produto =  await this.productRepository.deleteProduct(id,name, price);
        console.log("Service - Delete ", produto);
        return produto;
    }

    async filtrarProduto(produtoData: any): Promise<Product> {
        if(!produtoData ){
            throw new Error("Informações incompletas");
        }
        const id = parseInt(produtoData, 10);

        const produto =  await this.productRepository.filterProduct(id);
        console.log("Service - Filtrar", produto);
        return produto;
    }

    async listarTodosProdutos(): Promise<Product[]> {
        const produto =  await this.productRepository.filterAllProduct();
        console.log("Service - Filtrar Todos", produto);
        return produto;
    }

}