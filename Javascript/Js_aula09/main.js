let numeros = [16, 49, 6, 12, 57, 26, 89, 17]

numeros.forEach((numero) => {
    if(numero % 2 == 0){
        console.log(`Numero par ${numero}`)
    }else{
        console.log(`Numero impar ${numero}`)
    }
})