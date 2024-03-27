import { Product } from "../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id:number): Product|undefined{
        return this.productList.find(product => product.id === id);
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

}