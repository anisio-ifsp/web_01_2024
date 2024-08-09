import { stringParaData, verificaFormatoData } from "../../util/DataUtil";

export class ProductEntity{
    id: number;
    name: string;
    price: number;
    expirationDate: Date;


    constructor(id?:number, name?:string, price?:number, expirationDate?: string){
        this.validatesInformation(name, price, expirationDate);
        this.id = id || 0;
        this.name = name || '';
        this.price = price || 0;
        this.expirationDate = stringParaData(expirationDate || '');
    }

    private validatesInformation(name:any, price:any, expirationDate:any){
        let error ='';
        if (typeof name !== 'string' || typeof price !== 'number' || typeof expirationDate !== 'string') {
            error += ("Informações incompletas ou incorretas. ");
        }

        if(!verificaFormatoData(expirationDate)){
            error += ("A data deve possuir o formato: dd/MM/yyyy");
        }

        if(error != ''){
            throw new Error(error);
        }
    }
}