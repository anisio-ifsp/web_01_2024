import { Product } from "../model/Product";
import { ProductRepository } from "../repository/ProductRepository";
export class ProductService{

    productRepository: ProductRepository = new ProductRepository();

    cadastrarProduto(produtoData: any): Product {
        const { name, description, price } = produtoData;
        if(!name || !description || !price ){
            throw new Error("Informações incompletas");
        }

        const produtoEncontrado = this.consultarProduto(undefined,name);
        if(produtoEncontrado){
            throw new Error("Produto já cadastrado!!!");
        }
        const novoProduto = new Product(name, description, price);
        this.productRepository.insereProduto(novoProduto);
        return novoProduto;
    }

    consultarProduto(id: any, name:any): Product|undefined{
        if(id && name){
            console.log("Com ID e Name");
            const idNumber: number = parseInt(id, 10);
            return this.productRepository.filtraProdutoPorNomeId(idNumber,name);
            
        }else if(id){
            console.log("Com ID");
            const idNumber: number = parseInt(id, 10);
            return this.productRepository.filtraProdutoPorId(idNumber);

        }else if(name){
            console.log("Name");
            return this.productRepository.filtraProdutoPorNome(name);
        }
        
        console.log(id)
        return undefined;
    }

    getProducts(ordem:any):Product[]{
        if(ordem === "desc"){
            return this.productRepository.filtraTodosProdutos().sort((a,b) => b.price - a.price);
        }
        return this.productRepository.filtraTodosProdutos().sort((a,b) => a.price - b.price);
    }

    deletarProduto(id:any){
        const product = this.consultarProduto(id, undefined);
        if(!product){
            throw new Error("Produto não encontrado");
        }

        this.productRepository.deletaProduto(product);
    }

    atualizarProduto(produtoData: any): Product {
        const {id, name, description, price } = produtoData;
        if(!name || !description || !price ||!id ){
            throw new Error("Informações incompletas");
        }

        let produtoEncontrado = this.consultarProduto(id,undefined);
        if(!produtoEncontrado){
            throw new Error("Produto não cadastrado!!!");
        }
        produtoEncontrado.description = description;
        produtoEncontrado.name = name;
        produtoEncontrado.price =price;
        this.productRepository.atualizaProduto(produtoEncontrado);
        return produtoEncontrado;
    }
}