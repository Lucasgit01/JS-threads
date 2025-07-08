const Pfisica = {
    nome: 'Lucas Silva',
    idade: 21,
    cpf: '78964327896',
    profissao: 'Dev',
    Reservista: true,
    Certificados: ['MongoDB', 'JS', 'NodeJS', 'ReactJS'],
    media: 7.5,
    //this = Referênciar o contexto do objeto passado na função instruir a mesma em suas ações.
    foiAprovado: function(Mediabase) {
        return this.media >= Mediabase ? 'Você está qualificado!' : 'Reprovado';
    }
}

const Pfisica2 = Object.create(Pfisica)
Pfisica2.nome = 'Léo';

 console.log(Pfisica.foiAprovado(7));
 console.log(Pfisica2.nome);
 


