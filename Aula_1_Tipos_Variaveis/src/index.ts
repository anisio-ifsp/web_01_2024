// Tipo number para números
let idade: number = 25;
let altura: number = 1.75;

console.log(idade)

// Tipo string para texto
let nome: string = "João";
let sobrenome: string = 'Silva';

// Tipo boolean para valores verdadeiro/falso
let isAdulto: boolean = true;
let isAdmin: boolean = false;

// Tipo array para coleções de valores do mesmo tipo
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Maria", "João", "Ana"];

// Tipo tuple para arrays com um número fixo de elementos e tipos definidos
let pessoa: [string, number] = ["João", 25];

// Tipo any para qualquer tipo de valor (evitar usar quando possível)
let valorQualquer: any = 10;
valorQualquer = "abc";
valorQualquer = true;

// Tipo object para valores não primitivos
let pessoaObjeto: object = { nome: "João", idade: 25 };

// Tipo union para aceitar múltiplos tipos
let nota: number | string = 10;
nota = "A";

// Tipo intersection para combinar múltiplos tipos
type Aluno = {
    nome: string;
    idade: number;
};

type Estudante = Aluno & {
    matricula: number;
};

let estudante: Estudante = {
    nome: "Maria",
    idade: 20,
    matricula: 12345
};



//***Annotations vs Inferência***

// Annotation para variável
let nomeAluno: string;

// Annotation para arrays
let numbers: number[];

// Annotation para objeto
let person: { nome: string, idade: number };


// Inferência de tipo para variável
let comprimento = 25; // TypeScript infere que idade é do tipo number

// Inferência de tipo para arrays
let sequencia = [1, 2, 3, 4, 5];
// TypeScript infere que numeros é do tipo number[]

// Inferência de tipo para objeto
let visitante = { nome: "João", idade: 30 };
// TypeScript infere que pessoa é do tipo { nome: string, idade: number }







