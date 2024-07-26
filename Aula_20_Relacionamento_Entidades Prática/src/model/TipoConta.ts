export class TipoConta{
    id: number;
    descricao: string;
    codigoTipoConta: number;

    constructor(id?:number, descricao?:string, codigoTipoConta?:number){
        this.id = id || 0;
        this.descricao = descricao || '';
        this.codigoTipoConta = codigoTipoConta || this.geraNumeroConta();
    }

    private geraNumeroConta():number{
        return Date.now();
    }
}