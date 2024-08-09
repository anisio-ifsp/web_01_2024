import { executarComandoSQL } from "../database/mysql";
import { ProductEntity } from "../model/entity/ProductEntity";


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

    async insertProduct(product:ProductEntity) :Promise<ProductEntity>{
        const query = "INSERT INTO estoque.Product (name, price, expirationDate) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [product.name, product.price, product.expirationDate]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            product.id = resultado.insertId;
            return new Promise<ProductEntity>((resolve)=>{
                resolve(product);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }

    async updateProduct(product:ProductEntity) :Promise<ProductEntity>{
        const query = "UPDATE estoque.product set name = ?, price = ?, expirationDate = ? where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [product.name, product.price, product.expirationDate, product.id]);
            console.log('Produto atualizado com sucesso, ID: ', resultado);
            return new Promise<ProductEntity>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Erro ao atualizar o produto de ID ${product.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async deleteProduct(product:ProductEntity) :Promise<ProductEntity>{
        const query = "DELETE FROM estoque.product where id = ?;" ;

        try {
            const resultado = await executarComandoSQL(query, [product.id]);
            console.log('Produto deletado com sucesso: ', product);
            return new Promise<ProductEntity>((resolve)=>{
                resolve(product);
            })
        } catch (err:any) {
            console.error(`Falha ao deletar o produto de ID ${product.id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProductById(id: number) :Promise<ProductEntity>{
        const query = "SELECT * FROM estoque.product where id = ?" ;

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return new Promise<ProductEntity>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto de ID ${id} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterProductByName(name: string) :Promise<ProductEntity[]>{
        const query = "SELECT * FROM estoque.product where name = ?" ;

        try {
            const resultado:ProductEntity[] = await executarComandoSQL(query, [name]);
            console.log('Produto localizado com sucesso, ID: ', resultado);
            return new Promise<ProductEntity[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao procurar o produto ${name} gerando o erro: ${err}`);
            throw err;
        }
    }

    async filterAllProduct() :Promise<ProductEntity[]>{
        const query = "SELECT * FROM estoque.product" ;

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<ProductEntity[]>((resolve)=>{
                resolve(resultado);
            })
        } catch (err:any) {
            console.error(`Falha ao listar os produtos gerando o erro: ${err}`);
            throw err;
        }
    }

    
}