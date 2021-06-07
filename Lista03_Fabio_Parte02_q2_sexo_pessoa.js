const input = require('prompt-sync')()


function main(){
    const letra = input('Informe seu sexo é F para Feminino ou M para Masculino): ')
    f_m(letra)
}

function f_m(letra){
    if (letra === 'F' || letra === 'f'){
        console.log('Sexo Feminino')
    } else if (letra === 'M' || letra === 'm'){
        console.log('Masculino')
    } else{
        console.log('Sexo Inválido')
    }
}

main()