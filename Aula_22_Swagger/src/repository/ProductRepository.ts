import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";


export class ProductRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS estoque.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL,
            expirationDate DATE NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertProduct(product:Product) :Promise<Product>{
        const query = "INSERT INTO estoque.Product (name, price, expirationDate) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [product.name, product.price, product.expirationDate]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            product.id = resultado.insertId;
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }

    async updateProduct(product:Product) :Promise<Product>{
        const query = "UPDATE estoque.product set name = ?, price = ?, expirationDate = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [product.name, product.price, product.expirationDate, product.id]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${product.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteProduct(product:Product) :Promise<Product>{
        const query = "DELETE FROM estoque.product where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [product.id]);
            console.log('Produto deletado com sucesso: ', product);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${product.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProduct(id: number) :Promise<Product>{
        const query = "SELECT * FROM estoque.product where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return new Promise<Product>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllProduct() :Promise<Product[]>{
        const query = "SELECT * FROM estoque.product" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Product[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os produtos gerando o erro: ${err}`);
            throw err;
        }
    }

    
}