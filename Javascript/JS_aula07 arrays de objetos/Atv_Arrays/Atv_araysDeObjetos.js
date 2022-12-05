const alunos = [
    {
        Nome: "Guilherme",
        Idade: "17 Anos",
        Nota: [9, 6, 8, 7],
        Endereço: {
            Rua: 'Rua Macuxis',
            Numero: 483,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Escola: "E.E.OTTO DE BARROS VIDAL",
        Série: "3° do Ensino Médio",
        Sala: "3",
        Responsavel: "Jurema"
    },
    {
        Nome: "Giovanna",
        Idade: "15 Anos",
        Nota: [5, 7, 6, 8],
        Endereço: {
            Rua: 'serra negra',
            Numero: 294,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Escola: "Agenor Couto",
        Série: "3° do Ensino Médio",
        Sala: "7",
        Responsavel: "Jair Francisco"

    },
    {
        Nome: "Joselia Pereira",
        Idade: "15 Anos",
        Nota: [10, 7, 9, 6],
        Endereço: {
            Rua: 'Avenida Imirim',
            Numero: 1000,
            Cidade: 'São Paulo',
            Estado: 'SP',
        },
        Escola: "Leme do Prado",
        Série: "3° do Ensino Médio",
        Sala: "10",
        Responsavel: "Juliana"

    },
];
console.log(alunos);
console.log(alunos[1].texto);
console.log(alunos[2].Nome, alunos[2].Nota, alunos[2].Endereço);