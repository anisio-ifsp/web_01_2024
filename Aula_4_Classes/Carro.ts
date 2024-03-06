// Definição da classe 'Carro'
class Carro {
    // Propriedades da classe
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
  
    // Construtor da classe
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }
  
    // Método para exibir informações do carro
    exibirInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
  }
  
  // Criando uma instância da classe 'Carro'
  const meuCarro = new Carro("Toyota", "Corolla", 2020, "Prata");
  
  // Exibindo informações do carro
  meuCarro.exibirInfo();
    