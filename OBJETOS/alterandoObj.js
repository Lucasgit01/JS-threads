const Pfisica = {
    nome: 'Lucas Silva',
    idade: 21,
    nascimento: new Date(2004, 8, 16) ,
    cpf: '78964327896',
    profissao: 'Dev',
    Reservista: true,
    Certificados: []
};

function exibe(lista){
    const Lista = lista;
    console.log(Lista)
}

function add(info){
    const inserir = Pfisica.Certificados.push(info);
    console.log(Pfisica)
}

Pfisica.Certificados = ['BD', 'JS']

add('TS')
exibe(Pfisica);


