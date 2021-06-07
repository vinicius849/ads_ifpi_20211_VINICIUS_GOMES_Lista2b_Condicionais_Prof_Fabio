const prompt = require('prompt-sync')()

// Entrada
const num = Number(prompt('Número: '))

// Desenvolvimento
if(num > 0){
    console.log('O Número é positivo.')
}else if(num < 0){
    console.log('O número é negativo.')
}

