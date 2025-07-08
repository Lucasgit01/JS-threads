const Pfisica = {
    nome: 'Lucas Silva',
    idade: 21,
    nascimento: new Date(2004, 8, 16) ,
    cpf: '78964327896',
    profissao: 'Dev',
    Reservista: true,
    Certificados: []
};

for(let chave in Pfisica) { 
    const tipo = typeof Pfisica[chave];
    if(tipo !== 'object' && tipo !== 'function') {
        const texto = `A chave ${chave} tem o valor ${Pfisica[chave]}`
        console.log(texto);
    }
}