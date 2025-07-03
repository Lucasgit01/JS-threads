const notas = [5, 10, 8, 7.5];

let somaDasNotas = 0;

// ...no Of, apenas guardamos os valores do índice e resgatamos eles para as operações.
for (let nota of notas) {
    somaDasNotas += nota;
}

const media = somaDasNotas/ notas.length;

console.log(`A média das notas é ${media.toFixed(2)}`);