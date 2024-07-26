import { ContaRepository } from "../repository/ContaRepository"; 
import { Conta } from "../model/Conta"; 
import { TipoContaRepository } from "../repository/TipoContaRepository";
import { TipoConta } from "../model/TipoConta";

export class ContaService{

    contaRepository = new ContaRepository();
    tipoContaRepository = new TipoContaRepository();

    async criaConta(contaData: any):Promise<Conta>{
        const {saldo,tipoConta} = contaData;

        if (typeof saldo !== 'number' || typeof tipoConta !== 'number') {
            throw new Error("Informações incompletas ou incorretas");
        }
        const tipoContaResult: TipoConta[]= await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(undefined,tipoConta)

        if(tipoContaResult.length == 0){
            throw new Error("Tipo de conta informado inexistente.");
        }

        return this.contaRepository.insereConta(new Conta(undefined,undefined,saldo,tipoConta));
    }

    async atualizaConta(contaData: Conta):Promise<Conta>{
        const conta = new Conta(contaData.id,contaData.numeroConta, contaData.saldo, contaData.tipoConta);

        if (!(conta instanceof Conta)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Conta");
        }
        const tipoContaResult: TipoConta[]= await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(undefined,conta.tipoConta)

        if(tipoContaResult.length == 0){
            throw new Error("Tipo de conta informado inexistente.");
        }

        this.contaRepository.updateConta(conta);
        return conta;
    }

    async deletaConta(contaData: Conta):Promise<Conta>{
        const conta = new Conta(contaData.id,contaData.numeroConta, contaData.saldo, contaData.tipoConta);
        if (!(conta instanceof Conta)) {
            throw new Error("O parâmetro passado não é um objeto do tipo Conta");
        }
        const result:any = await this.contaRepository.deletaConta(conta);
        if (result.affectedRows == 0) {
            throw new Error("Conta não encontrada.");
        }
        return conta;
    }

    async getConta(id:any, numeroConta:any, tipoConta:any):Promise<Conta|null>{
        const idNumber: number = parseInt(id,10);
        const numeroContaNumber: number = numeroConta;
        const tipoContaNumber: number = parseInt(tipoConta,10);

        const result:Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipo(idNumber,numeroContaNumber,tipoContaNumber);
        if(result.length > 0){
            return result[0];
        }

        return null
    }

    async getTodasConta():Promise<Conta[]>{
        return this.contaRepository.listaConta();
    }


}