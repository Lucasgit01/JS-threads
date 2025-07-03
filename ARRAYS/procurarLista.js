const alunos = ['João', 'Lucas', 'Rodrigo', 'Ana', 'Maria'];
const notas = [10, 10, 8, 7.5];

const lista = [ alunos, notas];

//includes realiza a busca na lista por parâmetros
//indexOf retorna o indice da 1ª ocorrência do valor fornecido

// !!! Utilizar em consultas no BD!!!
function exibeNomeNota(aluno) {
    if(lista[0].includes(aluno)){
        //Desestruturação da lista - tornamos a constante o próprio indice de busca.
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];
        console.log(`O aluno ${aluno} tem por média ${mediaAluno}`);
    }else{
        console.log("Estudante inexistente!")
    }
}

exibeNomeNota('Lucas');
exibeNomeNota('sadjsa')