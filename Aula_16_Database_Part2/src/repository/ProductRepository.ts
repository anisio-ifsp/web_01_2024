import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{

    async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS Vendas.Product (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price DECIMAL(10,2) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insertProduct(name: string, price: number) :Promise<Product>{
        const query = "INSERT INTO vendas.Product (name, price) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [name, price]);
            console.log('Produto inserido com sucesso, ID: ', resultado.insertId);
            const product = new Product(resultado.insertId,name, price);
            return new Promise<Product>((resolve)=>{
                resolve(product);
            })
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
            throw err;
        }
    }
    
}