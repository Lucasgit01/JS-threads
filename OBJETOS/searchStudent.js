const estudantes = require('./estudantes.json');


//Filtrando o estudante pela propriedade
function filtrarPorPropriedade(list, property) {
    return list.filter((student) => {
        return !student.endereco.hasOwnProperty(property);
    })
}

const listaEnderecosImcompletos = filtrarPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosImcompletos);