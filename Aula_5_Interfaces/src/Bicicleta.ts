import {Veiculo} from "./Veiculo"

export class Bicicleta implements Veiculo {
    acelerar(): void {
        console.log("Bicicleta pedalando...");
    }

    parar(): void {
        console.log("Bicicleta parando...");
    }
}