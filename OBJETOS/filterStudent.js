const estudantes = require('./estudantes.json');

//sort - função callback para ordenar filtros
function ordenar(list, property, decrescente = false) {
    return list.sort((a, b) => {
        let valorA = a[property];
        let valorB = b[property];

        if(valorA < valorB) { 
            return decrescente ? 1 : -1;
        }
        if(valorA > valorB) { 
            return decrescente ? -1 : 1;
        }
        return 0;
    })
}

const ordenaLista = ordenar(estudantes, 'nome', decrescente = true);
console.log(ordenaLista);