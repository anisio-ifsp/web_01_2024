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
        console.log("Service ", novoProduto);
        return novoProduto;
    }

}