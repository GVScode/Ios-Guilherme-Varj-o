// Criando array unidimensional
var array1 = ["Guilherme", 18, "Catarina", 11, true]
console.log(array1);
console.log(array1[2]);
array1[3] = 80;
console.log(array1);

// Criando array Bidimensional
var array2 = [
    ["pipoca", 10, false],
    ["string", 20, true],
    ["Margarina", 12, false],
]
console.log(array2);
console.log(array2[2][0])
console.clear()
array2[1][0] ="Salsicha";
console.log(array2);

console.clear()
//array de objeto Carro
var carro= ["Uno", 1998, "0km", false, 2];
var x = carro.toString();
console.log(typeof x)
console.log(typeof carro)
console.log(x)
console.log(carro)


console.clear()
var y = carro.join("?")
console.log(x)
console.log(y)

//propriedade tamanho do array

console.clear();
let array =[0, 1, 2, 3, 4]
console.log(array.length)

// remover e inserir elementos 
//pop()
/*console.clear();
const frutas1 = ["banana", "laranja", "maçã", "manga" ]
let x = frutas1.pop(); //x= manga
console.log(frutas1);
console.log(x);*/

// Push() Inserir uma informação no final do array
console.clear();
var u = carro.push('lego')
console.log(carro)
console.log(u)

//shift () Remove o elemento no inicio do array
console.clear()
var p = carro.shift();
console.log(carro);
console.log(p);

// adiciona a informação no inicio da array 
console.clear()
var w = carro.unshift("console.log")
console.log(carro)
console.log(w)

//Apaga um elemento do array em uma posição pré selecionada

delete carro[1]
console.log(carro);