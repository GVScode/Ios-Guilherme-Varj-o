let tabuada = document.querySelector('.result'); //pegar o span
let number = document.getElementById('num')

multiplicar = () =>{
    valorNum = number.value

    tabuada.innerHTML = `${valorNum} x 0 = ${valorNum*0} <br>
        ${valorNum} x 1 = ${valorNum*1}<br>
        ${valorNum} x 2 = ${valorNum*2}<br>
        ${valorNum} x 3 = ${valorNum*3}<br>
        ${valorNum} x 4 = ${valorNum*4}<br>
        ${valorNum} x 5 = ${valorNum*5}<br>
        ${valorNum} x 6 = ${valorNum*6}<br>
        ${valorNum} x 7 = ${valorNum*7}<br>
        ${valorNum} x 8 = ${valorNum*8}<br>
        ${valorNum} x 9 = ${valorNum*9}<br>
        ${valorNum} x 10 = ${valorNum*10}<br>
    `
}