const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false },
    { nome: 'Thiago', nota: 9.3, bolsista: false }
]

//Declarativo

const getNota = aluno => aluno.nota
const soma = (a, b) => a + b
const media = (sominha, len) => sominha / len
const subResultado = alunos.map(getNota).reduce(soma)
console.log(subResultado / alunos.length)