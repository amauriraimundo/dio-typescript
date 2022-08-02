// Como podemos melhorar o esse código usando TS? 

enum Work {
    Atriz,
    Pedreiro
}

type Pessoa ={
    nome: string,
    idade: number,
    profissao: Work,
}

let pessoa1: Pessoa ={
    nome: 'Maria',
    idade: 29,
    profissao: Work.Atriz
}

let pessoa2: Pessoa ={
    nome: 'Roberto',
    idade: 19,
    profissao: Work.Pedreiro
}

let pessoa3: Pessoa ={
    nome: 'Laura',
    idade: 32,
    profissao: Work.Atriz
}

let pessoa4: Pessoa ={
    nome: 'Carlos',
    idade: 19,
    profissao: Work.Pedreiro
}