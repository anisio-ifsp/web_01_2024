
export class DataService{

    calculaIdade(dataNascimento: any): number {

        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!regex.test(dataNascimento)) {
            throw new Error("Data de nascimento inválida");
        }

        const partes = dataNascimento.split('/');
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1;
        const ano = parseInt(partes[2], 10);

        const dataNascimentoDate = new Date(ano, mes, dia);


        if (isNaN(dataNascimentoDate.getTime())) {
            throw new Error("Data de nascimento inválida");
        }

        const hoje = new Date();
        let idade = hoje.getFullYear() - dataNascimentoDate.getFullYear();
        const diferencaMeses = hoje.getMonth() - dataNascimentoDate.getMonth();

        if (diferencaMeses < 0 || (diferencaMeses === 0 && hoje.getDate() < dataNascimentoDate.getDate())) {
            idade--;
        }

        return idade;
    }
}