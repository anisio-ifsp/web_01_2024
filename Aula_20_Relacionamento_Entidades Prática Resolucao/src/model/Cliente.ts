import { stringParaData, verificaFormatoData } from "../util/DataUtil";

export class Cliente{
    id:number;
    name:string;
    cpf:string;
    dataNascimento:Date;

    constructor(id?:number, name?:string, cpf?:string, dataNascimento?:string){
        this.validaInformacoes(name,cpf,dataNascimento);
        this.id = id || 0;
        this.name = name || '';
        this.cpf = cpf || '';
        this.dataNascimento = stringParaData(dataNascimento || '');
    }

    private validaInformacoes(name:any, cpf:any, dataNascimento:any){
        let error ='';
        if (typeof name !== 'string' || typeof cpf !== 'string' || typeof dataNascimento !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(!verificaFormatoData(dataNascimento)){
            error += ("A data deve possuir o formato: dd/MM/yyyy");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
    
}