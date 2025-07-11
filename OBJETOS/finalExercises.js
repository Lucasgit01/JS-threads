const setores = require('./setores.json');

function buscaSetor(id) {
    const nome = setores.find((value) => value.id === id) 

   if (nome) {
        console.log(nome.nome)
    } else {
        console.error( "Não há registros por aqui :(" )
    }
}

function limitSearch(maxValue) {
    return setores.filter((setor) => {
        return setor.id <= maxValue;
    })
}
console.log(limitSearch(3));

buscaSetor(3);