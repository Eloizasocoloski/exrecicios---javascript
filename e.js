//ex.1
let nome = 'joão'
console.log(nome)
//ex.2
let a = 5, b = 10
console.log(a + b)
//ex. 3
let primeiroNome = 'josefa', ultimoNome = 'silva'
console.log(primeiroNome + ultimoNome)
//ex. 4.a
let pessoa = {
    nome: 'eloiza',
    idade: 17,
    endereço: 'garcia',
    telefone: 47988789951,
}
console.log(pessoa)
//ex 4.b
let frutas = ["maça", "banana", "açai"]
frutas[3] = 'pera'
frutas.push('abacate')
console.log(frutas)

console.log('o tamanho do vetor é: ', frutas.length)
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
//ex 5
let numero = [1, 2, 3, 4, 5]
console.log(numero[0], numero[numero.length - 1])
//ex 6
let cores = ['vermelho', 'verde', 'azul']
for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}
//ex 7 
let idade = 15
console.log(idade)
if (idade < 18) {
    console.log('menor')
} else {
    console.log('maior')
}
//ex 8
let nota = 8
console.log(nota)
if (nota > 7) {
    console.log('Aprovado')
} else if (nota >= 5 && nota <= 7) {
    console.log('Recuperação')
} else if (nota < 5) {
    console.log("Reprovado")
}
//ex 9

let diaDAsemana = 2
console.log(diaDAsemana)
switch (diaDAsemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta")
        break;
    case 7:
        console.log("Sábado");
        break;

}
// ex.10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}
// ex.11
let contador = 1
while (contador <= 5){
    console.log(contador)
    contador++
}
//12
//13
let valores = [10, 20, 30, 40, 50]
let soma = 0
for(let i=0; i<valores.length; i++){
    soma += valores[i]

}
console.log('ex.13: A soma é', soma);
//ex.14
let vetor = [5,4,6,9,5,2,3,1,15,2,3]
let maior = 0, n = 0
while (n < vetor.length){
    if(vetor[n] > maior){
        maior = vetor [n]
    }
    n++
}
console.log ('ex.14: O maior numero é ', maior);

// ex.16
n = 10
let fatorial = 1
for (let i=1; i<=n; i++){
    fatorial *= i 
}
console.log('ex.16', fatorial);

// ex.17
for(i=1; i<=10; i++){
    if( i % 2 == 0){
    console.log (i,'é par'); 
}else{
    console.log(i,'é impar');
}
}
 // ex.19
let texto = 'gato', resultado = ''
for(i = texto.length-1; i>=0; i--){
    resultado += texto [i]
}
console.log('texto invertido: ', resultado);