aritmetica(2, 0)



function aritmetica(a = 0, b = 0) {
    return {
        titulo: console.log("exercicio [1]"),
        soma: console.log(`${a} + ${b} = ${a + b}`),
        sub: console.log(`${a} - ${b} = ${a - b}`),
        mult: console.log(`${a} * ${b} = ${a * b}`),
        div: console.log(`${a} / ${b} = ${a / b}`)
    }
}

let testaTriangulo = function(a = 0, b = 0, c = 0) {
    console.log("exercicio [2]")
    trianguloTeste = false

    if (a >= 0 || b >= 0 || c >= 0) {
        trianguloTeste = true
        if (a == b && b == c) {
            console.log("O triangulo e equilatero")
        } else if (a != b && b != c && c != a) {
            console.log("O triangulo e escaleno")
        } else {
            console.log("O triangulo e isoceles")
        }
    } else {
        console.log("Nao e triangulo")
    }

    return trianguloTeste
}

console.log(testaTriangulo(4, 5, 6))


function eleva(base = 0, expoente = 0) {
    console.log("exercicio [3]")
    return Math.pow(base, expoente)
}

console.log(eleva(2, 4))


function divAndMod(dividendo = 0, divisor = 0) {
    console.log("exercicio [4]")
    return {
        divisao: console.log(`Divisao: ${dividendo} / ${divisor} = ${dividendo / divisor}`),
        mod: console.log(`Mod: ${dividendo} % ${divisor} = ${dividendo % divisor}`)
    }
}

divAndMod(8, 2)

function somaMoedasString(a = 0, b = 0) {
    console.log("exercicio [5]")
    str = `${(a + b).toFixed(2)}`
    let nstr = str.replace(".", ",")
    return nstr
}

console.log(`R$ ${somaMoedasString(0.1, 0.2)}`)

function jurosSimples(cInicial = 0, tJuros = 0, mAplicacao = 0) {
    console.log("exercicio [6.1]")

    return (cInicial * (tJuros / 100)) * mAplicacao
}

function jurosComposto(cInicial = 0, tJuros = 0, mAplicacao = 0) {
    console.log("exercicio [6.2]")

    return (cInicial * eleva((1 + (tJuros / 100)), mAplicacao)).toFixed(2)
}

console.log(`Juros Simples ${jurosSimples(10000, 15, 10)}`)
console.log(`Juros Composto ${jurosComposto(5000, 1, 6)}`)

function equacao2grau(a = 0, b = 0, c = 0) {
    console.log("exercicio [7]")
    delta = eleva(b, 2) - 4 * a * c
    if (delta > 0) {
        return {
            xI: (-b + Math.sqrt(delta)) / (2 * a),
            xII: (-b - Math.sqrt(delta)) / (2 * a)
        }
    } else {
        return "Delta esta negativo"
    }
}
console.log(equacao2grau(1, -1, -12))

function recordeMelhorPiorjogo(resultados = "") {
    console.log("exercicio [7]")

    if (resultados != "") {

        let str = resultados.split(" ")
        let vMax = 0
        let vMin = 0
        let countMax = 0
        let countMin = 0

        for (let index = 0; index < str.length; index++) {
            if (str[index] > vMax) {
                vMax = str[index]
                countMax++
            }
        }
        vMin = vMax
        for (let index = 0; index < str.length; index++) {
            if (str[index] < vMin) {
                vMin = str[index]
                countMin = index
            }
        }
        return [countMax, countMin + 1]
    } else {
        return ""
    }
}
console.log(recordeMelhorPiorjogo("10 20 20 8 25 3 0 30 1"))



function resultadoAlunos(nota = 0) {
    let multiplo = 5
    if (nota < 38 || nota > 100) {
        return "Reprovado"
    } else if ((nota % multiplo) > 2) {
        nota = nota - (nota % multiplo) + multiplo
        return `Aprovado: ${nota}`
    } else {
        nota = nota - (nota % multiplo)
        return `Aprovado: ${nota}`
    }
}

console.log(resultadoAlunos(40))

function divisivel(dividendo = 0, divisor = 0) {
    if ((dividendo % divisor) == 0) {
        return true
    } else {
        return false
    }
}
console.log(divisivel(22, 3))

function anoBisexto(ano = 0) {
    if ((ano % 400) == 0) {
        return true
    } else if ((ano % 100) == 0) {
        return false
    } else if ((ano % 4) == 0) {
        return true
    } else {
        return false
    }
}

console.log(anoBisexto(2016))

function fatorial(numero = 0) {
    aux = 1
    while (numero > 0) {
        aux = aux * numero
        numero--
    }
    return aux
}

console.log(fatorial(120))

function diaUtil(dia = 0) {
    switch (dia) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return true
        case 1:
        case 7:
            return false
        default:
            return null
    }
}

function frutasVenda(fruta = "") {
    switch (fruta) {
        case "maca":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "“Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Nao temos essa opcao"
    }
}

function vendaCarros(carro = "") {
    switch (carro) {
        case "hatch":
            return "Venda feita com sucesso"
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Nao temos essa opcao"
    }
}