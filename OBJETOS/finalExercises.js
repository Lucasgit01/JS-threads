const setores = require('./setores.json');
const depto = require('./depto.json');

function buscaSetor(id) {
    const nome = setores.find((value) => value.id === id) 

   if (nome) {
        console.log(nome.nome, nome.setor)
    } else {
        console.error( "Não há registros por aqui :(" )
    }
}

function limitSearch(maxValue) {
    return setores.filter((setor) => {
        return setor.id <= maxValue;
    })
}

function filterFuncionários(setorId) {
    return depto.filter((dpt)=> {
        return dpt.id === setorId ? dpt.id.funcionarios : 'Nada consta :('
    })
}

console.log(filterFuncionários(1));

//console.log(obj);
//console.log(limitSearch(3));
//buscaSetor(1);