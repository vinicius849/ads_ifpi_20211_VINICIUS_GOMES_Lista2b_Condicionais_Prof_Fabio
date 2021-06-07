const prompt = require('prompt-sync')()


function main(){
    const nota_1 = Number(prompt('Informe a primeira nota: '))
    const nota_2 = Number(prompt('Informe a segunda nota: '))

    if(media(nota_1, nota_2) === 10){
        console.log('Aprovado com Distinção')
    }else if(media(nota_1, nota_2) < 7){
        console.log('Reprovado')
    }else{
        console.log('Aprovado')
    }
}

function media(nota_1, nota_2){
    return (nota_1 + nota_2) / 2

}

main()