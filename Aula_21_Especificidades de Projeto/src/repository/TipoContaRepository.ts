import { executarComandoSQL } from "../database/mysql";
import { TipoConta } from "../model/TipoConta"; 
export class TipoContaRepository{

    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
            CREATE TABLE IF NOT EXISTS banco.tipo_conta (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                descricao VARCHAR(255) NOT NULL, 
                codigoTipoConta BIGINT NOT NULL
            )`;

        try {
            const resultado = await executarComandoSQL(query, []);
            //console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insereTipoConta(tipoConta: TipoConta):Promise<TipoConta>{
        try {
            const resultado = await executarComandoSQL(
                "INSERT INTO banco.tipo_conta (descricao, codigoTipoConta) VALUES (?,?)",
                [tipoConta.descricao, tipoConta.codigoTipoConta]
            );
            console.log('Tipo de conta criado com sucesso:', resultado.insertId);
            tipoConta.id = resultado.insertId;
            return tipoConta;
        } catch (err) {
            console.error('Erro ao criar um novo tipo de conta: ', err);
            throw err;
        }
    }

    async updateTipoConta(tipoConta: TipoConta): Promise<void> {
        try {
            const query = "UPDATE banco.tipo_conta SET descricao = ?, codigoTipoConta = ? WHERE id = ?";
            await executarComandoSQL(query, [tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id]);
            console.log('Tipo de conta atualizado com sucesso:', tipoConta.id);
        } catch (err) {
            console.error('Erro ao atualizar tipo de conta:', err);
            throw err;
        }
    }

    async getTipoContaPorDescricaoOuCodigoOuId(descricaoTipoConta?: string, codigoTipoConta?:number, id?:number): Promise<TipoConta[]> {
        let query = "SELECT * FROM banco.tipo_conta WHERE";
        const params: any[] = [];
        
        if (descricaoTipoConta) {
            query += " descricao = ?";
            params.push(descricaoTipoConta);
        }

        if (codigoTipoConta) {
            query += (params.length ? " AND" : "") + " codigoTipoConta = ?";
            params.push(codigoTipoConta);
        }

        if (id) {
            query += (params.length ? " AND" : "") + " id = ?";
            params.push(id);
        }

        if (params.length === 0) {
            throw new Error("Pelo menos um dos parâmetros deve ser fornecido");
        }

        try {
            const result: TipoConta[] = await executarComandoSQL(query, params);
            console.log('Busca efetuada com sucesso:', result);
            return result;
        } catch (err) {
            console.error('Erro ao buscar tipo de conta:', err);
            throw err;
        }
    }

    async deletaTipoConta(tipoConta: number): Promise<void> {
        try {
            const query = "DELETE FROM banco.tipo_conta WHERE id = ?";
            await executarComandoSQL(query, [tipoConta]);
            console.log('Tipo de conta deletado com sucesso:', tipoConta);
        } catch (err) {
            console.error('Erro ao deletar tipo de conta:', err);
            throw err;
        }
    }

    async listaTipoConta(): Promise<TipoConta[]> {
        try {
            const query = "SELECT * FROM banco.tipo_conta";
            const result: TipoConta[] = await executarComandoSQL(query, []);
            return result;
        } catch (err) {
            console.error('Erro ao listar os tipos de conta:', err);
            throw err;
        }
    }

}