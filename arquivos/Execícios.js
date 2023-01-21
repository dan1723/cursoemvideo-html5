/*
                            SISTEMA DE NOTAS ESCOLARES

function pegarnota(nota){
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0

    let notafinal;
    
    
    if (notaA){
        notafinal = 'A'
    } else if (notaB){
        notafinal = 'B'
    } else if (notaC){
        notafinal = 'C'
    } else if (notaD){
        notafinal = 'D'
    } else if (notaF){
        notafinal = 'F'
    } else {
        notafinal = 'Nota inválida'
    }

    return notafinal
}

console.log (pegarnota (45))
console.log (pegarnota (102))
console.log (pegarnota (-5))
console.log (pegarnota (0))
console.log (pegarnota (87))
console.log (pegarnota (75))
console.log (pegarnota (47))
console.log (pegarnota (100)) 
*/

/*                             FLUXO DE CAIXA FAMILIAR              */
/*


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.



let family = {
    receita: [1867.68, 1500.00, 400.00, 350.00],
    despesa: [3009.50, 100.00, 1200.00, 130.00]
}

function soma(array){
    let total = 0;

    for (let valor of array) {
        total += valor
    }
    return total   

}


function calculodoorçamento() {
    const calculodareceita = soma(family.receita)
    const calculodadespesa = soma(family.despesa)

    const total = calculodareceita - calculodadespesa

    const bom = total >= 0

    let resultado = 'negativo'

    if (bom) {
        resultado = 'positivo'
    }

    console.log(`Seu saldo é ${resultado}: R$${total.toFixed(2)} `)

}

calculodoorçamento() 
*/