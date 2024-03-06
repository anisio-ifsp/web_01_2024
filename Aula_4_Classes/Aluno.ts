class Aluno{
    private nome:string;
    private idade:number;
    private matricula:string;
    private turma:string;
    
    constructor(nome:string, idade:number,matricula:string,turma:string){
        this.nome =nome;
        this.idade = idade;
        this.matricula = matricula;
        this.turma = turma;
    }

    get getNome():string{
        return this.nome;
    }

    set setNome(nome:string){
        this.nome =nome;
    }

    get getIdade():number{
        return this.idade;
    }

    set setIdade(idade:number){
        this.idade = idade;
    }

    get getMatricula():string{
        return this.matricula;
    }

    set setMatricula(matricula:string){
        this.matricula = matricula;
    }
    get getTurma():string{
        return this.turma;
    }

    set setTurma(turma:string){
        this.turma = turma;        
    }
}
 let aluno = new Aluno("Pedro",17,"BT34987","A45B");
 aluno.setIdade = 27;
 console.log(aluno);