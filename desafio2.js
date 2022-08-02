"use strict";
// Como podemos melhorar o esse código usando TS? 
var Work;
(function (Work) {
    Work[Work["Atriz"] = 0] = "Atriz";
    Work[Work["Pedreiro"] = 1] = "Pedreiro";
})(Work || (Work = {}));
let pessoa1 = {
    nome: 'Maria',
    idade: 29,
    profissao: Work.Atriz
};
let pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Work.Pedreiro
};
let pessoa3 = {
    nome: 'Laura',
    idade: 32,
    profissao: Work.Atriz
};
let pessoa4 = {
    nome: 'Carlos',
    idade: 19,
    profissao: Work.Pedreiro
};
