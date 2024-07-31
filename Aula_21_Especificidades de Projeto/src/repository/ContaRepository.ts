import { executarComandoSQL} from "../database/mysql";
import { Conta } from "../model/Conta";
export class ContaRepository {

    constructor() {
        this.createTable();
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS banco.conta (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                numeroConta VARCHAR(20) NOT NULL, 
                saldo DECIMAL(10,2) NOT NULL, 
                tipoConta BIGINT NOT NULL,
                cliente INT NOT NULL
            )`;
        try {
            const resultado = await executarComandoSQL(query, []);
            //console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereConta(conta: Conta): Promise<Conta> {
        const query = "INSERT INTO banco.conta (numeroConta, saldo, tipoConta, cliente) VALUES (?, ?, ?, ?)";
        try {
            const resultado = await executarComandoSQL(query, [conta.numeroConta, conta.saldo, conta.tipoConta, conta.cliente]);
            console.log('Conta criada com sucesso:', resultado.insertId);
            conta.id = resultado.insertId;
            return conta;
        } catch (err) {
            console.error('Erro ao criar uma nova conta:', err);
            throw err;
        }
    }

    updateConta(conta: Conta) {
        const query = 'UPDATE banco.Conta SET numeroConta = ?, saldo = ?, tipoConta = ?, cliente = ? WHERE ID = ?';
        executarComandoSQL(query, [conta.numeroConta, conta.saldo, conta.tipoConta, conta.cliente, conta.id])
            .then(function (resultado) {
                return resultado
            }).catch(function (erro) {
                return erro
            });
    }

    async atualizaTipoConta(tipoConta: number, novoTipoConta: number) {
        try {
            const query = 'UPDATE banco.Conta SET tipoConta = ? WHERE tipoConta = ?'
            const contasAfetadas: number = (await this.getContaPorIdOuNumeroOuTipoOuCliente(undefined,undefined,tipoConta)).length;
            if (contasAfetadas > 0) {
                await executarComandoSQL(query, [novoTipoConta, tipoConta]);
                console.log(`Tipo de conta atualizado em ${contasAfetadas} contas:`);
            }
        } catch (err) {
            console.error('Erro a na atualização massiva tipo de conta:', err);
            throw err;
        }
    }


    async getContaPorIdOuNumeroOuTipoOuCliente(id?: number, numeroConta?: number, tipo?: number, idCliente?: number): Promise<Conta[]> {
        let query = "SELECT * FROM banco.conta WHERE";
        const params: any[] = [];

        if (id) {
            query += " id = ?";
            params.push(id);
        }

        if (numeroConta) {
            query += (params.length ? " AND" : "") + " numeroConta = ?";
            params.push(numeroConta);
        }

        if (tipo) {
            query += (params.length ? " AND" : "") + " tipoConta = ?";
            params.push(tipo);
        }

        if (idCliente) {
            query += (params.length ? " AND" : "") + " cliente = ?";
            params.push(idCliente);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: Conta[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar conta:', err);
            throw err;
        }
    }

    async deletaConta(conta: Conta): Promise<any> {
        try {
            const query = "DELETE FROM banco.conta WHERE id = ? AND numeroConta = ? AND tipoConta = ?";
            const resposta = await executarComandoSQL(query, [conta.id, conta.numeroConta, conta.tipoConta]);
            console.log('Conta deletado com sucesso:', resposta);
            return resposta;
        } catch (err) {
            console.error('Erro ao deletar tipo de conta:', err);
            throw err;
        }
    }

    async listaConta(): Promise<Conta[]> {
        try {
            const query = "SELECT * FROM banco.conta";
            const result: Conta[] = await executarComandoSQL(query, []);
            return result;
        } catch (err) {
            console.error('Erro ao listar as contas:', err);
            throw err;
        }
    }

}