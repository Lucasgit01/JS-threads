const alunos =  ['Lucas', 'Ana', 'Lais'];
const medias = [8, 9, 6];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);
