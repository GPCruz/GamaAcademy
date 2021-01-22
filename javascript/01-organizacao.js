console.log('Sentença 01')

{
    {
        console.log('Bloco 01')
    }
    {
        console.log('Bloco 02')
    }
}

function Teste(){
    console.log('Resposta da função')
}

console.log('Sentença 02')

Teste()

function TransformaParaMaiuscula( parametro ){
    console.log(parametro.toUpperCase())
}

let UserName = 'Jua1 da Siuva'

TransformaParaMaiuscula(UserName)