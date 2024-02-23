"use strict";
// Tipo number para números
let idade = 25;
let altura = 1.75;
console.log(idade);
// Tipo string para texto
let nome = "João";
let sobrenome = 'Silva';
// Tipo boolean para valores verdadeiro/falso
let isAdulto = true;
let isAdmin = false;
// Tipo array para coleções de valores do mesmo tipo
let numeros = [1, 2, 3, 4, 5];
let nomes = ["Maria", "João", "Ana"];
// Tipo tuple para arrays com um número fixo de elementos e tipos definidos
let pessoa = ["João", 25];
// Tipo any para qualquer tipo de valor (evitar usar quando possível)
let valorQualquer = 10;
valorQualquer = "abc";
valorQualquer = true;
// Tipo object para valores não primitivos
let pessoaObjeto = { nome: "João", idade: 25 };
// Tipo union para aceitar múltiplos tipos
let nota = 10;
nota = "A";
let estudante = {
    nome: "Maria",
    idade: 20,
    matricula: 12345
};
//***Annotations vs Inferência***
// Annotation para variável
let nomeAluno;
// Annotation para arrays
let numbers;
// Annotation para objeto
let person;
// Inferência de tipo para variável
let comprimento = 25; // TypeScript infere que idade é do tipo number
// Inferência de tipo para arrays
let sequencia = [1, 2, 3, 4, 5];
// TypeScript infere que numeros é do tipo number[]
// Inferência de tipo para objeto
let visitante = { nome: "João", idade: 30 };
// TypeScript infere que pessoa é do tipo { nome: string, idade: number }
