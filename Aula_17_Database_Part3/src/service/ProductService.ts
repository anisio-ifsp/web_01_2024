import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";

export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, price } = produtoData;
        if(!name || !price ){
            throw new Error("Informações incompletas");
        }

        const novoProduto = this.productRepository.insertProduct(name, price);
        console.log("Service ", novoProduto);
        return novoProduto;
    }

}