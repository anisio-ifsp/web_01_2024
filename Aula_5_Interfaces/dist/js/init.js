"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Bicicleta_1 = require("./Bicicleta");
function testarVeiculo(veiculo) {
    veiculo.acelerar();
    veiculo.parar();
}
const carro = new Carro_1.Carro();
const bicicleta = new Bicicleta_1.Bicicleta();
testarVeiculo(carro);
testarVeiculo(bicicleta);
