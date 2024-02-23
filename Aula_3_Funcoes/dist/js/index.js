"use strict";
//Funções
//Funções podem ser criadas como funções nomeadas e funções anônimas.
// funcao nomeada
function adicionarTipada(x, y) {
    return x + y;
}
// funcao anonima
let add = function (x, y) { return (x + y); };
//Funções com tipos
//TypeScript permite a definição de tipos em parâmetros de funções e no tipo de retorno da função.
//A sintaxe para definição de tipos de variáveis continua válida aqui para a definição de tipos de parâmetros: nome: tipo. Além disso, a sintaxe permite a definição do tipo do retorno da função: function nome(): tipo {}.
//O tipo de retorno da função pode ser além de um tipo primitivo.
function somar(p1, p2) {
    let p = { x: p1.x + p2.x, y: p1.y + p2.y };
    return p;
}
let ponto1 = { x: 1, y: 5 };
let ponto2 = { x: 10, y: 20 };
let ponto3 = somar(ponto1, ponto2); // retorna {x: 11, y: 25}
function nome(primeiro, ultimo) {
    if (ultimo) {
        return `${primeiro} ${ultimo}`;
    }
    else {
        return primeiro;
    }
}
console.log(nome("Anisio", "Silva"));
function inicializar(valor = 0) {
    return valor;
}
function concatenar(primeiro, ...ultimos) {
    return primeiro + ' ' + ultimos.join(' ');
}
console.log(concatenar("Professor", "Anisio", "Silva"));
