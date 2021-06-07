const prompt = require('prompt-sync')()


function main(){
    const turno = input('Informe em que turno voce estuda M para matutino, V para vespertino ou N para noite): ')
    saudacao(turno)
}

function saudacao(turno){
    if (turno === 'm' || turno === 'M'){
        console.log('Bom Dia!')
    }else if(turno === 'v' || turno === 'V'){
        console.log('Boa Tarde!')
    }else if (turno === 'n' || turno === 'N'){
        console.log('Boa Noite!')
    }else{
        console.log('Valor Inválido!')
    }
}

main()