export function verificaFormatoData(dataString: string): boolean {
    let dateIsCorrect = false;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regex.test(dataString)) {
        dateIsCorrect = true;
    }
    return dateIsCorrect;
}

export function stringParaData(dataString: string): Date {
    const partes = dataString.split('/');
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1;
    const ano = parseInt(partes[2], 10);

    let data = new Date(ano, mes, dia);

    if (isNaN(data.getTime())) {
        throw new Error("Data inválida");
    }
    return data;
}

export function calculaDiferencaDiasEntreDatas(menorData: Date, maiorData: Date): number {
    let dias = maiorData.getFullYear() - menorData.getFullYear();
    const diferencaMeses = maiorData.getMonth() - menorData.getMonth();

    if (diferencaMeses < 0 || (diferencaMeses === 0 && maiorData.getDate() < menorData.getDate())) {
        dias--;
    }
    return dias;
}