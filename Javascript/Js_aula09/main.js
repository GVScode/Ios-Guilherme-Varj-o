let numeros = [17, 43, 8, 4, 97, 56, 29, 30]

numeros.forEach((numero) => {
    if(numero % 2 == 0){
        console.log(`Numero par ${numero}`)
    }else{
        console.log(`Numero impar ${numero}`)
    }
})