const Pfisica = {
    nome: 'Lucas Silva',
    idade: 21,
    cpf: '78964327896',
    profissao: 'Dev',
    Reservista: true,
    Certificados: [],
    endereco: [{
        rua: 'Avenida A',
        numero: 20,
        cidade: 'São Paulo'
    }]
};

Pfisica.endereco.push({
    rua: 'Avenida B',
    numero: 0,
    cidade: 'Rio de Janeiro'
});

//console.log(Pfisica)
//console.log(Pfisica.endereco[1])

const filtroEnderecosComNumero = Pfisica.endereco.filter((endereco) => endereco.numero > 1)

console.log(filtroEnderecosComNumero);

