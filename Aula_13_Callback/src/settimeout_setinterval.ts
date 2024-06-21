function exibeText(){
    console.log("Executando o comando.")
}

export function testTimeout():void{
    console.log("Antes do setTimeout.");
    setTimeout(exibeText, 2000);
    console.log("Depois do setTimeout");
}

export function testInterval():void{
    console.log("Antes do setInterval.");
    setInterval(exibeText,3000);
    console.log("Depois do setInterval.");
}