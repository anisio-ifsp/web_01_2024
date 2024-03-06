"use strict";
class Aluno {
    constructor(nome, idade, matricula, turma) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.turma = turma;
    }
    get getNome() {
        return this.nome;
    }
    set setNome(nome) {
        this.nome = nome;
    }
    get getIdade() {
        return this.idade;
    }
    set setIdade(idade) {
        this.idade = idade;
    }
    get getMatricula() {
        return this.matricula;
    }
    set setMatricula(matricula) {
        this.matricula = matricula;
    }
    get getTurma() {
        return this.turma;
    }
    set setTurma(turma) {
        this.turma = turma;
    }
}
let aluno = new Aluno("Pedro", 17, "BT34987", "A45B");
aluno.setIdade = 27;
console.log(aluno);
