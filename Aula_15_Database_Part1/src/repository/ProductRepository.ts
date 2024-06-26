import { executarComandoSQL } from "../database/mysql";

export class ProductRepository{

    private imprimeResult(err:any, result:any){
        if(result != undefined){
            console.log("Dentro callback", result);
        }
    }

    createTable() {
        try {
            const resultado = executarComandoSQL("CREATE TABLE Vendas.Product (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, price DECIMAL(10,2) NOT NULL)", [],this.imprimeResult);
            console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    insertProduct(name: string, price: number) {
        try {
            const resultado = executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price], this.imprimeResult
            );
            console.log('Produto inserido com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao inserir o produto:', err);
        }
    }
    
}