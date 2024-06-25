export function imprimir( value: any):void{
    console.log("A operação efetuada resultou em: " + value);
}


export function concatenar( a: string, b: string, callback: (param:any)=> void):void{
    var op = a + " " + b;
    callback(op);
}

export function somar( a: number, b: number, callback: (param:any)=> void ):void{
    var op = a + b;
    callback(op);
}




