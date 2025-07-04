const salaPY = [6, 8, 9, 4, 6 ];
const salaJS = [5, 6, 4, 9, 3 ];
const salaTS = [4, 7, 8, 5, 9 ];

function Medias(listaDeNotas) {
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0)
    const media = somaDasNotas / listaDeNotas.length;
    return media;
} 

console.log(Medias(salaPY));
console.log(Medias(salaJS));
console.log(Medias(salaTS));