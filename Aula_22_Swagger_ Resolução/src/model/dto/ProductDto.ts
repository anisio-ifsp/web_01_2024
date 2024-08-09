export class ProductDto {
    id:number;
    name: string;
    price: number;
    expirationDate: string;


    constructor(id: any, name: any, price: any, expirationDate: any) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
    }
}