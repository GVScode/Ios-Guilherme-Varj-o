
/* 1) Receber o preço de três produtos e informar qual
produto possui o menor valor. */

let tênis = 300
let camiseta =  100
let boné = 50

if(tênis < camiseta && tênis < boné){
    console.log(`esse é o menor preço ${tênis}`)
}else if(camiseta < tênis && camiseta < boné){
    console.log(`esse é o menor preço ${camiseta}`)
}else{
    console.log(`o produto mais barato tem o seguinte valor: R$${boné.toFixed(2)}`)
}

//2)Receber três números e mostrar em ordem crescente

let num1 = 1
let num2 = 2
let num3 = 3
let maior = 4
let meio = 5
let menor = 6

if(num1 > num2 && num1 > num3){
    maior = num1

    if(num2 > num3){
        meio = num2
        menor = num3
    }else{
        menor = num2
        meio = num3
    }
    
}if(num1 < num2 && num1 < num3){
    menor = num1
        if(num2 > num3){
            maior = num2
            meio = num3
        }else{
            maior = num3
            meio = num2
        }
}else{
    meio = num1
        if(num2 > num3){
            maior = num2
            menor = num3
        }else{
            maior = num3
            menor = num2
        }
}

console.log(`${menor} ${meio} ${maior}`)

/*3)Receber um número correspondente a um determinado
ano e em seguida informar se este ano é bissexto*/

let ano = 2024 

if(ano % 4 == 0 || ano % 400 == 0){
    console.log(`${ano} é um ano bissexto`)
}else{
    console.log(`${ano} não é um ano é bissexto!!!`)
}