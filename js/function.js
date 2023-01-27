class Pessoa {


    constructor(nome) {
        this.nome = nome
    }

    getNome = () => {
        return this.nome
    }
}

let j = new Pessoa("Joao")

console.log(j.getNome())