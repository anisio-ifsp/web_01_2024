// funcao nomeada
function adicionar(x:number, y:number) {
    return x + y;
}

// funcao anonima
let add = function(x:number, y:number) { return (x + y); }


//Funções com tipos
function adicionarTipada(x: number, y: number): number {
    return x + y;
}


function somarTipada(p1: {x: number, y: number}, p2: {x: number, y: number}) : {x: number, y: number} {
    let p = {x: p1.x + p2.x, y: p1.y + p2.y};
    return p;
}

let ponto_1 = {x: 1, y: 5};
let ponto_2 = {x: 10, y: 20};

let ponto3 = somar(ponto_1, ponto_2); // retorna {x: 11, y: 25}

//Parâmetros opcionais e padrões
function nome(primeiro: string, ultimo?: string): string {
    if (ultimo) {
        return `${primeiro} ${ultimo}`;
    } else {
        return primeiro;
    }
}

nome('José', 'Silva'); // retorna 'José Silva'
nome('José'); // retorna 'José'

function inicializar(valor: number = 0) : number {
    return valor;
}

inicializar(); // retorna 0
inicializar(10); // retorna 10

//Parâmetros rest
//Não confundir com REST, recurso para definição de serviços sobre HTTP

function concatenar(primeiro: string, ...ultimos: string[]): string {
    return primeiro + ' ' + ultimos.join(' ');
}

concatenar('a', 'b', 'c', 'd', 'e'); // retorna 'a b c d e';

//Sobrecarga
function somar(p1: number[], p2x: number[]) : number[];
function somar(p1: {x: number, y: number}, p2: {x: number, y: number}) : {x: number, y: number};
function somar(p1: any, p2: any): any {
    if (p1 instanceof Array) {
        return [p1[0] + p2[0], p1[1] + p2[1]];
    } else {
        return {x: p1.x + p2.x, y: p1.y + p2.y};    
    }
}

let ponto1 = {x: 1, y: 5};
let ponto2 = {x: 10, y: 20};

somar(ponto1, ponto2); // retorna {x: 11, y: 25}
somar([1, 1], [2, 2]); // retorna [3, 3]



/*
Exercício 1: Calculadora Simples
Crie uma função chamada calculadora que recebe três parâmetros: 
numero1 (um número), numero2 (um número) e operacao (uma string representando a operação a ser realizada: "soma", "subtracao", "multiplicacao" ou "divisao"). 
A função deve retornar o resultado da operação entre numero1 e numero2.

Resultado esperado:
console.log(calculadora(5, 3, "soma")); // Saída esperada: 8
console.log(calculadora(10, 2, "subtracao")); // Saída esperada: 8
console.log(calculadora(4, 5, "multiplicacao")); // Saída esperada: 20
console.log(calculadora(10, 2, "divisao")); // Saída esperada: 5

Dica:
Estrutura switch-case
switch(expression) { 
   case constant-expression1: { 
      //statements; 
      break; 
   } 
   case constant_expression2: { 
      //statements; 
      break; 
   } 
   default: { 
      //statements; 
      break; 
   } 
} 

*/


/*
Exercício 2: Verificador de Palíndromo
Crie uma função chamada verificarPalindromo que recebe uma string como parâmetro e retorna verdadeiro se a string for um palíndromo 
(ou seja, se ela é lida da mesma forma da esquerda para a direita e da direita para a esquerda) e falso caso contrário.

Resultado esperado:
console.log(verificarPalindromo("arara")); // Saída esperada: true
console.log(verificarPalindromo("reviver")); // Saída esperada: true
console.log(verificarPalindromo("banana")); // Saída esperada: false
console.log(verificarPalindromo("reconhecer")); // Saída esperada: true

Dica:
let frase: string = "Ana"
const fraseInverso = frase.split('').reverse().join('');

*/