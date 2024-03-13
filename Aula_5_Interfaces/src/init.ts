import {Veiculo} from "./Veiculo"
import {Carro} from "./Carro"
import {Bicicleta} from "./Bicicleta"

function testarVeiculo(veiculo: Veiculo): void {
    veiculo.acelerar();
    veiculo.parar();
}

const carro = new Carro();
const bicicleta = new Bicicleta();

testarVeiculo(carro);
testarVeiculo(bicicleta);