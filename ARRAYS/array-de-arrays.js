const alunos = ['João', 'Lucas', 'Rodrigo', 'Ana', 'Maria'];
const notas = [10, 6, 8, 7.5];

const lista = [ alunos, notas];

console.log(
    `O aluno da posição 1 da lista é: ${lista[0][1]},
    a nota desse aluno é ${lista[1][1]}.`
);