class alunos {
    constructor(id, nome, idade, desistente) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.desistente = desistente;
    }
}

const guilherme = new alunos(1, 'guilherme', 20, false);
const Giovanna = new alunos(2, 'Giovanna', 22, false);
const Maria = new alunos(3, 'Maria', 17, false);

console.log(guilherme);
console.log(Giovanna);
console.log(Maria);