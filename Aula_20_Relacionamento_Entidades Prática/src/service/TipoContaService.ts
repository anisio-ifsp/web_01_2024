import { TipoContaRepository } from "../repository/TipoContaRepository"; 
import { TipoConta } from "../model/TipoConta"; 
import { ContaRepository } from "../repository/ContaRepository";
import { Conta } from "../model/Conta";

export class TipoContaService{

    contaRepository = new ContaRepository();
    tipoContaRepository = new TipoContaRepository();

    async criaTipoConta(descricaoData: any):Promise<TipoConta>{
        if (descricaoData == undefined) {
            throw new Error("A descrição deve ser informada.");
        }

        const descricao:string = String(descricaoData).toLocaleLowerCase();

        const result: TipoConta[] = await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(descricao);

        if(result.length > 0){
            throw new Error("Descrição já cadastrada.");
        }

        return this.tipoContaRepository.insereTipoConta(new TipoConta(0,descricao));
    }

    async atualizaTipoConta(tipoConta: TipoConta):Promise<TipoConta>{
        console.log(tipoConta instanceof TipoConta)
        if (!tipoConta) {
            throw new Error("O parâmetro passado não é um objeto do tipo TipoConta");
        }

        const result: TipoConta[] = await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(undefined, undefined, tipoConta.id);

        if(result.length == 0){
            throw new Error("Tipo de conta não encontrada.");
        }

        this.tipoContaRepository.updateTipoConta(tipoConta);
        await this.contaRepository.atualizaTipoConta(result[0].codigoTipoConta,tipoConta.codigoTipoConta)
        return tipoConta;
    }

    async deletaTipoConta(tipoConta: TipoConta):Promise<TipoConta>{
        console.log(tipoConta instanceof TipoConta)
        if (!tipoConta) {
            throw new Error("O parâmetro passado não é um objeto do tipo TipoConta");
        }

        const result: TipoConta[] = await this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(tipoConta.descricao, tipoConta.codigoTipoConta, tipoConta.id);


        if(result.length == 0){
            throw new Error("Tipo de conta não encontrada. Verifique os campo(s) informados!");
        }

        const listaContas: Conta[] = await this.contaRepository.getContaPorIdOuNumeroOuTipo(undefined, undefined, result[0].codigoTipoConta)

        if(listaContas.length > 0){
            throw new Error("O tipo de conta não pode ser excluído pois existe vínculo em contas cadastradas.");
        }

        this.tipoContaRepository.deletaTipoConta(tipoConta.id)
        return tipoConta;
    }

    getTipoConta(id?:any, descricao?:any, codigoTipoConta?:any ):Promise<TipoConta[]>{
        return this.tipoContaRepository.getTipoContaPorDescricaoOuCodigoOuId(descricao, codigoTipoConta,id);
    }

    getTiposConta():Promise<TipoConta[]>{
        return this.tipoContaRepository.listaTipoConta();
    }

    

}