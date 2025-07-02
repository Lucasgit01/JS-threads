const notas = [10, 7, 8, 5, 6];

//"pop" Método/Função que remove o ultimo elemento da lista.
notas.pop();

const media = (notas [0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));