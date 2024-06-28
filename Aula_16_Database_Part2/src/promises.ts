function delay( ms:number ): void{
    setTimeout(()=>{
        if(ms > 2000){
            console.log("Operação concluída após " + ms / 1000 + " segundos.");
        }else{
            console.log("Tempo insuficiente para concluir a operação.");
        }
    }, ms)
}

function test(){
    console.log( "Antes da execução do delay....");

    delay(3000);

    console.log( "Depois da execução do delay....");

}

test();