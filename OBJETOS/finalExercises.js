const setores = require('./setores.json');

function buscaSetor(id) {
    const nome = setores.find((value) => value.id === id) 

   if (nome) {
        console.log(nome.nome)
    } else {
        console.error( "Não há registros por aqui :(" )
    }
}

const buscaLimite = setores.filter((setor) => {
    return setor.id <= 4;
})

console.log(buscaLimite);

buscaSetor(3);