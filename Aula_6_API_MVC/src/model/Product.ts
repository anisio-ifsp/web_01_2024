export class Product{
    id:number;
    name:string;
    description:string;
    price:number;

    constructor(name:string, description:string, price:number){
        this.name = name;
        this.description = description;
        this.price = price;
        this.id = this.geraId();
    }

    private geraId():number{
        return Date.now();
    }
}