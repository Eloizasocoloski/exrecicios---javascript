//ex.1
let nome =  'joão'
console.log(nome)
//ex.2
let a = 5, b = 10
console.log(a+b)
//ex. 3
let primeiroNome = 'josefa', ultimoNome = 'silva' 
console.log(primeiroNome + ultimoNome)
//ex. 4.a
let pessoa = {
    nome : 'eloiza',
    idade : 17,
    endereço : 'garcia',
    telefone : 47988789951,
}
console.log(pessoa)
//ex 4.b
let  frutas =  [ "maça", "banana", "açai"]
frutas [3] = 'pera'
frutas.push('abacate')
console.log(frutas)

console.log('o tamanho do vetor é: ', frutas.lenght)
for (let i=0; i<frutas.length;i++){
    console.log(frutas[i])
}
//ex 5
let numero = [1,2,3,4,5]
console.log(numero[0], numero[numero.length-1])
//ex 6
let cores =  ['vermelho', 'verde', 'azul']
for (let i=0; i<cores.length; i++){
    console.log(cores[i])
}
//ex 7 
let idade = 15
console.log(idade)
if (idade < 18){
    console.log('menor')
}else{
    console.log ('maior')
}
//ex 8
let nota = 8
console.log(nota)
if (nota > 7){
    console.log('Aprovado')
}else if(nota >= 5 && nota <= 7){
    console.log('Recuperação')
}else if(nota < 5){
    console.log("Reprovado")
}
//ex 9
let diaDAsemana = 

