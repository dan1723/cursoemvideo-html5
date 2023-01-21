/*(este atributo é utilizado para escrever comentarios em multiplas linhas) o código abaixo escreve alguma mensagem no console
EXEMPLO: console.log()
*/


/* 
String 

* Cadeia de caracteres ABC
"" // aspas duplas
'' // aspas simples 
``// template literals ou template strings (permite utilizar multiplas linhas dentro do código)
*/

/* 
Number 

* Números 
33 // inteiros
12.5 // reais - float 
NaN // not a number 
infinity // infinito 
*/

/*
Boolean (são dados que tem apenas dois valores)

true // verdadeiro 
false // falso 
*/

/*
* undefined =  indefinido 
*/

/* 
* null 
objeto que não possui nada dentro 
diferente de indefinido 
*/

/*
* object (é um tipo de dados que cria uma estrutura)
objeto 
propriedades / atributos
funcionalidades / métodos 

{propriedade: "valor"}

EXEMPLO: 
console.log({
name: "Danilo",
idade: 29,
andar: function()
    {console.log('andar')}
})
*/

/* 
* Array (vetores)
Uma lista
Agrupamentos de dados 

EXEMPLO:
console.log([
    "carne bovina",
    "carne suina",
    "carne caprina",
])
*/

/* 
Variáveis 

- Nomes simbólicos para receber algum valor 
- Atalhos de códigos
- Identificadores

Existe 3 palavras reservadas para criar uma variável:
- Var;
- Let;
- Const 
*/ 

/* 
Scope (escopo)

- Escopo determina a visibilidade de alguma variável no JS 

Block statement 
- vamos iniciar um bloco

{
    aqui dentro é um bloco e posso colocar qualquer código

}   aqui fechamos o bloco     

O bloco, também criará um novo escopo. Chamamos de "block-scoped"

A variável var é global (hoisting) e poderá funcionar fora de um escopo de bloco

Const e let são locais e só funcionam no escopo onde foi criada
*/ 

/* 
Nomeando variáveis 

- O JS é case-sensitive (sensível ao caso, ou seja, letras maiusculas e minusculas fazem a diferença)

- O JS aceita a cadeia de caracteres Unicode (voce poderá colocar aspas, acentuações sem problema)

Posso:
- Iniciar com esses caracteres especiais: $ % *
- Iniciar com letras
- Colocar acentos 
- Letras maísculas e minúsculas fazem difernça 

Não posso:
- Iniciar com números 
- Colocar espaços vazios no nome 

Ideal:
- Criar nomes que fazem sentido
- Que explique o que a variável vé ou faz 
- Camelcase 
- Snake_case
- Escrever em inglês 
*/

/* 
Multiplos argumentos na função
EX: let name, age, ishuman 
console.log (name, age, ishuman)

Escrita de texto + variáveis
concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos.')

Interpolação de valores com template literals or template strings (utilizando o sinal de crase ``)
EX: console.log(`O ${name} tem ${age} anos.`)
*/

/* 
função Object 
EX: 
const person = {
    name: "Danilo",
    age: 29,
    weight: 78.5,
    isadmin: true
}

console.log(`${person.name} tem ${person.age} anos`)
*/

/* 
função Array "[]" (a função array é quase igual a object, pois a sua única diferença é que ele nomeia os termos em ordem numérica apartir do zero e também não é necessário caracterizá-lo)

EX: let students = [
0 - dados,
1 - student
]
*/



/*                          FUNÇÕES                                    */



/*
Funções 
Funções são tipos de dados estruturais, que são declarados dessa forma: function nomeFunção() { código à cer executado } e para executar a função, usa-se: nomeFunção(). Uma função é importante para o agrupamento e reutilização de código.

EX: Declaração da função ou function statement
function createPhases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e Persistência")
    console.log("Revisão é a mãe do aprendizado")
}

Executar a função 
createPhases()
createPhases()
createPhases()
createPhases()
console.log("Fim do programa")
*/

/* 
Function expression or function anonymous
Parâmetros (parameters)

const sum = function(number1, number2){
    console.log(number1+number2)

}
sum(2,3) - aguments/ argumentos
*/

/* arrow function

const sayMyName = (name) => {
    console.log(name)
} 

sayMyName("Danilo")
*/

/* Callback function 
É uma função dentro do parametro de outra função, ou seja, você chama uma função e chama também a outra de volta


function sayMyName(name){
    console.log("antes de executar a função callback")

    name()

    console.log("depois de executar a callback")
}

sayMyName(
    () => {
        console.log("estou em uma callback")
    }
)
*/

/* Function constructor 
- expressão new
- criar um novo objeto
- this keyword

* dentro da função a palavra "this" faz referência a variavel que estará fora do escopo da função



function person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
    

}
const Danilo = new person("Danilo")
const João = new person("João")
console.log(Danilo.walk())
console.log(João.walk())
*/


/*                           MANIPULANDO DADOS                          /*


/* Type conversion (typecasting) vs type coersion 
- Ateração de um tipo de dado para outro tipo

Ex: 
type coersion (o proprio javascript força um number virar uma string)
console.log("9" + 5)

type conversion (nesse tipo de conversão o proprio programador de forma manual, por meio de uma função, converte o valor de um number para string)
console.log(Number("9")+5)
*/

/* Manipulando Strings e Números 

- Transformar String em números e números em string 

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))



- Contar quantos caracteres tem uma palavra e quantos digitos tem um número


let word = "Paralelepipedo"
console.log(word.length)

let number = 1234
console.log(String(number).length)


- Transformar um número quebrado com 2 casas decimais e trocar ponto por uma vírgula

let number = 345.33452355
console.log(number.toFixed(2).replace(".", ","))


- Transforme letras minúsculas em maiúsculas e viciverse

let word = "good morning"
console.log(word.toLocaleLowerCase()) transforma tudo em letras minusculas 

console.log(word.toLocaleUpperCase()) transforma tudo em letras maiusculas


- Separe um texto que conte espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _ 

let frase = "Eu quero viver o amor!"
let myarray = frase.split(" ") a propriadade split separa as palavras

let frasecomunderscore = myarray.join("_") a propriadade join junta as palavras

console.log(frasecomunderscore) 


- Verificar se o texto contém a palavra Amor 

let frase = "Eu quero viver o Amor!"
console.log(frase.includes("Amor")) 


- Criar Array com construtor 

let myArray = new Array ('a','b','c')
console.log(myArray)


- Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word))


- Manipulando Arrays 

let techs = ["html", "css", "js"]

- Adicionar um item no fim 

techs.push("nodejs")

- Adicionar no começo 

techs.unshift("sql")

- Remover do fim 

techs.pop()

- Remover do começo 

techs.shift()

- Pegar somente alguns elementos do array 

console.log(techs.slice(1,3)) 

- Remover 1 ou mais itens em qualquer posição do array 

techs.splice(1,2)

- Encontrar a posição de um elemento no array 

let index = techs.indexOf("js")
techs.splice(index, 1)
console.log(techs)
*/



/*                            EXPRESSÕES E OPERADORES                  


toda expressão no javacript pode terminar com um ponto e vírgula, porém ela é facultativa


- New (é uma expressão que serve para criar um novo objeto sem a necessidade de utilizar o simbolo chaves --> {})

* left-hand-side expression 
* criar um novo objeto 
 
let nome = new String("Danilo")
nome.surName = "Fernandes"
let age = new Number(29)
console.log(nome,age)


- Operadores unários 

* typeof (mostra o tipo 3de dado)
* delete (o delete procura uma propriedade dentro do objeto e irá deletar ela)

console.log(typeof "Danilo")

const person = {
    name: "Danilo",
    age: 29,
}
delete person.age
console.log(person)


- Operadores Aritiméticos

* multiplicação -> console.log(3.2*5.5)

* divisão -> console.log(12/2)

* soma -> console.log(34+67)

* subtração -> console.log(34-23)

* resto da divisão ou remainder: -> % 
let remainder
remainder = 999 % 5
console.log(remainder) 

* incremento 
let incremento = 0
incremento++
incremento++
console.log(incremento)

* decremento 
let decremento = 0
decremento--
decremento--
console.log(decremento) 

* exponencial
console.log(2**5)



- Operadores de comparação 

* irá comparar valores e retornar um boolean como resposta a camparação (o sinal == significa "igual a")*/

//let one = 1
//let two = 2

/*console.log(two == 1)
console.log(one == 1) 

* temos também o sinal diferente de != 
console.log(one != two)
console.log(one != 1)
console.log(one != "1") 

* sinal estritamente igual === (além de comparar o valor ele compara o tipo também)
console.log(one === "1")
console.log(one === 1)

* sinal estritamente diferente !== (além de comparar o valor ele compara o tipo também)
console.log(one !== "1")
console.log(one !== 1)



- Operadores de atribuição (Assignment)

let x

* assignment 
x = 1

* adição assignment 
x += 2

* subtração assignment 
x -= 1

* multiplicação assignment 
x *= 2

* divisão assignment 
x /= 2



- Operadores logicos (logical operators)

* 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso  

let pão = true
let queijo = false

AND &&
console.log(pão&&queijo) 

OR ||
console.log(pão||queijo) 

NOT ! (o operador not inverte o valor da váriavel)
console.log(!queijo) 



- Operador condicional (Ternário)

dependendo da condição, nós receberemos valores diferentes

condição então valor 1 se não valor 2
condition? value1 : value2 

* o sinal de interrogão equivale a palavra "então"
* o sinal de dois pontos equivale a palavra "senão"

EX1:

let pão = false
let queijo = true

const cafedemanhã = pão && queijo? "Café top" : "Café ruim"

console.log(cafedemanhã)

EX2: 
maior de 18 anos 

let age = 18
const habilitação = age >= 18 ? "Pode dirigir" : "Não pode dirigir"
console.log(habilitação)  



- Falsy e Truthy

* Falsy 
quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false: 0, -0, "", null, indefined, NaN 

* Truthy
quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

true: {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity



- Precedência de operadores

grouping ()
negação e incremento ! ++ --
multiplicação e divisão * /
adição e subtração + -
relacional < <= > >=
igualdade  == != === !==
AND &&
OR ||
condicional ?:
assignment (atribuição) = += -= *=
*/



/*                      CONTROLE DE FLUXO DE APLICAÇÃO              */

/* 

- if....else (if = se // else = senão)

let temperatura = 37.2

if(temperatura >= 37.5){
    console.log("febre alta") 
} else if (temperatura < 37.5 && temperatura >= 37) {
    console.log("febre moderada")
} else {
    console.log("saudável") 
} 

- Switch (estrutura de decisão "CASO")

function calcular (n1, operador, n2){
    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = n1+n2
            // codigo para a expressão +
            break // encerra ou pausa o caso acima 
        case '-':
            resultado = n1-n2
            // codigo para a expressão - 
            break
        case '*':
            resultado = n1*n2
            break
        case '/':
            resultado = n1/n2
            break
        default:
            console.log('não implementado')
            break       
    }    
    return resultado
}

console.log(calcular (4, '&', 8))


- throw (disparar ou lançar) e try(tentar)...catch(pegar)

Essa expreção significa que ela vai tentar executar um bloco de código e se der alguma erro vai ser disparado esse erro, onde esse erro será capturado pela aplicação 

function primeironome (nome = '') {
    if(nome === '') {
        throw 'Informar o primeiro nome'

    }
    console.log('depois do erro')
}

try{
    primeironome()
} catch(e){
    console.log(e)
}

console.log('após a função de erro')*/


/*                            ESTRUTURA DE REPETIÇÃO                   */
/*
- For (estrutura de repetição PARA) 

for (let i = 0; i <= 10; i++) {
    if(i === 5) {
        // break (para a execução do loop);
        // continue (pula a execução do momento);
    }

    console.log(i)
}

- While (estrutura de repetição ENQUANTO)

let i = 0;
while(i <= 10) {
    console.log(i)

    i++;
}


- for...of (pega os valores das posições dos elementos de um array)

let nome = 'Danilo'
let nomes = ['Danilo', 'Naiara', 'Pedro']

for(let pegar of nomes){
    console.log(pegar)
}

- for...in (acessa as propriedades do objeto)  

let pessoa = {
    nome: 'Danilo',
    idade: 29,
    peso: 78
}

for (let propriadade in pessoa){
    console.log (propriadade)
    console.log(pessoa[propriadade])
}
*/ 