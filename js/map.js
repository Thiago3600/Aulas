Array.prototype.map2 = function(callback) {

}



retornaPreco = (produto = {}) => `R$ ${produto.preco.}`
paraObject = (json) => JSON.parse(json)



const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

let carrinho2 = carrinho.map(paraObject).map(retornaPreco)
console.log(carrinho2)