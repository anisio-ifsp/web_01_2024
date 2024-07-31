import { ContaRepository } from "../repository/ContaRepository"; 
import { Conta } from "../model/Conta"; 
import { TipoContaRepository } from "../repository/TipoContaRepository";
import { TipoConta } from "../model/TipoConta";
import { ClienteRepository } from "../repository/ClienteRepository";
import { Cliente } from "../model/Cliente";

export class ContaService{

    contaRepository = new ContaRepository();
    tipoContaRepository = new TipoContaRepository();
    clienteRepository = ClienteRepository.getInstance();

    async criaConta(contaData: any):Promise<Conta>{
        const {saldo,tipoConta,cliente} = contaData;

        if (typeof saldo !== 'number' || typeof tipoConta !== 'number' ||  typeof cliente !== 'number') {
            throw new Error("Informações incompletas ou incorretas");
        }

        const tipoContaNumber:number = parseInt(String(tipoConta),10);
        const tipoContaResult: TipoConta[]= await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(undefined,tipoConta)
        const clientes: Cliente[] = await this.clienteRepository.getClienteByNameCpfId(undefined, undefined,cliente);
        const contas: Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipoOuCliente(undefined,undefined,undefined,cliente);
        const descricaoTipoConta = tipoContaResult.find( tipo => 
                tipo.codigoTipoConta === tipoContaNumber
            )?.descricao

        if(tipoContaResult.length == 0 || clientes.length == 0){
            throw new Error("Tipo de conta ou cliente inexistente.");
        }
        if(this.buscaTipoConta(contas, tipoContaNumber)){
            throw new Error("Cliente já possui uma conta "+ descricaoTipoConta );
        }
        if(descricaoTipoConta == "poupança" && saldo < 100){
            throw new Error(`Para ${descricaoTipoConta} o saldo deve ser maior que R$100,00`);
        }

        return this.contaRepository.insereConta(new Conta(undefined,undefined,saldo,tipoConta,cliente));
    }

    private buscaTipoConta(contas:Conta[], tipo:number):Conta|undefined{
        return contas.find(conta => conta.tipoConta === tipo);
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

    async getConta(id:any, numeroConta:any, tipoConta:any, cliente:any):Promise<Conta|null>{
        const idNumber: number = parseInt(id,10);
        const numeroContaNumber: number = numeroConta;
        const tipoContaNumber: number = parseInt(tipoConta,10);
        const clienteNumber: number = parseInt(cliente,10);

        const result:Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipoOuCliente(idNumber,numeroContaNumber,tipoContaNumber,clienteNumber);
        if(result.length > 0){
            return result[0];
        }

        return null
    }

    async getTodasConta():Promise<Conta[]>{
        return this.contaRepository.listaConta();
    }


}