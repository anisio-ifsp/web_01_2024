import { Product } from "../model/Product";

export class ProductRepository{
    productList: Product[] = [];

    insereProduto(product: Product){
        this.productList.push(product);
    }

    filtraProdutoPorId(id:number): Product|undefined{
        return this.productList.find(product => product.id === id);
    }

    filtraProdutoPorNome(name:string): Product|undefined{
        return this.productList.find(product => product.name === name);
    }

    filtraProdutoPorNomeId(id: number, name:string): Product|undefined{
        return this.productList.find(product => product.name === name && product.id === id);
    }

    filtraTodosProdutos():Product[]{
        return this.productList;
    }

    deletaProduto(produto:Product){
        const index = this.productList.indexOf(produto);
        if (index !== -1) {
            this.productList.splice(index, 1);
        }
    }

    atualizaProduto(produto:Product): number{
        const index = this.productList.indexOf(produto);
        if(index !== -1){
            this.productList[index] = produto;
        }
        return index;
    }
}