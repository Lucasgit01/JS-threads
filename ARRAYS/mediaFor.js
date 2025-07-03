const notas = [5, 10, 8, 7.5];

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(`A média é ${media.toFixed(2)}`)