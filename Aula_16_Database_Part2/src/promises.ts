function delay(ms: number): Promise<void> {
    return new Promise<void>(
        (resolve, reject) => setTimeout(() => {
            if (ms > 2000) {
                console.log("Operação concluída após " + ms / 1000 + " segundos.");
                resolve();
            } else {
                console.log("Tempo insuficiente para concluir a operação.");
                reject();
            }
        }, ms)
    )
}

async function test() {
    try {
        console.log("Antes da execução do delay....");

        await delay(2000);
        console.log("Fim da promise");

    } catch (err) {
        console.log("Ocorreu algum erro...");
    } finally {
        console.log("Depois da execução do delay....");
    }
}

test();