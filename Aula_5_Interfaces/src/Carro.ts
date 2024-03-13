import { Veiculo } from "./Veiculo";
export class Carro implements Veiculo {
    acelerar(): void {
        console.log("Carro acelerando...");
    }

    parar(): void {
        console.log("Carro parando...");
    }
}