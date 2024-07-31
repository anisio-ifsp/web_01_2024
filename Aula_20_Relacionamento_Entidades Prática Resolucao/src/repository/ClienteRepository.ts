import { executarComandoSQL } from "../database/mysql";
import { Cliente } from "../model/Cliente"; 
export class ClienteRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS banco.cliente (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(255) NOT NULL,
                cpf VARCHAR(14) NOT NULL,
                dataNascimento DATE NOT NULL
            )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            //console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereCliente(cliente: Cliente):Promise<Cliente>{
        try {
            const resultado = await executarComandoSQL(
                "INSERT INTO banco.cliente (name, cpf, dataNascimento) VALUES (?,?,?)",
                [cliente.name, cliente.cpf, cliente.dataNascimento]
            );
            cliente.id = resultado.insertId;
            console.log('Cliente criado com sucesso:', cliente);
            return cliente;
        } catch (err) {
            console.error('Erro ao criar um cliente: ', err);
            throw err;
        }
    }

    async updateCliente(cliente: Cliente): Promise<void> {
        try {
            const query = "UPDATE banco.cliente SET name = ?, cpf = ?, dataNascimento = ? WHERE id = ?";
            await executarComandoSQL(query, [cliente.name, cliente.cpf, cliente.dataNascimento, cliente.id]);
            console.log('Cliente atualizado com sucesso:', cliente.id);
        } catch (err) {
            console.error('Erro ao atualizar cliente:', err);
            throw err;
        }
    }

    async getClienteByNameCpfId(name?: string, cpf?:string, id?:number): Promise<Cliente[]> {
        let query = "SELECT * FROM banco.cliente WHERE";
        const params: any[] = [];
        
        if (name) {
            query += " name = ?";
            params.push(name);
        }

        if (cpf) {
            query += (params.length ? " AND" : "") + " cpf = ?";
            params.push(cpf);
        }

        if (id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Cliente[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar cliente:', err);
            throw err;
        }
    }

    async deletaCliente(clienteId: number): Promise<void> {
        try {
            const query = "DELETE FROM banco.cliente WHERE id = ?";
            await executarComandoSQL(query, [clienteId]);
            console.log('Cliente deletado com sucesso:', clienteId);
        } catch (err) {
            console.error('Erro ao deletar cliente:', err);
            throw err;
        }
    }

    async listaCliente(): Promise<Cliente[]> {
        try {
            const query = "SELECT * FROM banco.cliente";
            const result: Cliente[] = await executarComandoSQL(query, []);
            return result;
        } catch (err) {
            console.error('Erro ao listar os clientes:', err);
            throw err;
        }
    }

}