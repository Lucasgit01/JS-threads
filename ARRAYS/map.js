const notas = [5, 10, 8, 7.5, 6];

//const notasAtualizadas = notas.map(function (nota) {
//    return nota + 1;
//})

const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota)

console.log(notasAtualizadas)