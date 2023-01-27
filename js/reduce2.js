const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: true },
    { nome: 'Ana', nota: 8.7, bolsista: false },
    { nome: 'Thiago', nota: 9.3, bolsista: false }
]


function todosBolsista(alunos) {
    let resultado = false

    const array = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
        console.log(acumulador, atual)
        return acumulador && atual
    })
    return array
}

console.log(todosBolsista(alunos))

function temBolsista(alunos) {
    const array = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
        console.log(acumulador, atual)
        return acumulador || atual
    })
    return array
}

console.log(temBolsista(alunos))