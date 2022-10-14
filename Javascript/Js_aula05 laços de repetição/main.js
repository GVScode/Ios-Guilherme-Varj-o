// while
let contador = 1;
while (contador <= 10) {
    console.log(`Valor = ${contador}`);
    contador++;
}
// while com decremento
console.clear();
let cont = 10;
while (cont >= 0) {
    console.log(`Valor = ${cont}`);
    cont--;
}



// do-while
/*console.clear();
let i = 10,
text = '';
do {
text += `O número é ${i}\n`;
i++;
} while (i < 10);
console.log(text);*/

// do-while
console.clear();
let i = 0,
    text = '';
do {
    text += `O número é ${i}\n`;
    i++;
} while (i < 10);
console.log(text);

// For
console.clear();
for (let i = 0; i < 10; i++) console.log(`Laço For número: ${i}`);

// For - Decremento
console.clear();
for (let i = 10; i > 0; i--) console.log(`Laço For número: ${i}`)

// Laços de arrays
const frutas = ['apples', 'oranges', 'pears', 10, true];
console.clear();
for (let j = 0; j < frutas.length; j++) console.log(`Nome: ${frutas[j]} \n`);

// Array de objetos e laços
console.clear();
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false,
    },
];
// For overloop
for (let t of todos) {
    console.log(t);
    console.log(t.text);
    console.log(t.id);
    }
    
