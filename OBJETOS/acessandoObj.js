const pessoa = {
    nome: 'Lucas Silva',
    idade: 21,
    cpf: '78964327896',
    profissao: 'Dev'
}

function exibeInfoPessoa(objPessoa, infoPessoa) {
    return objPessoa[infoPessoa];
}

console.log(exibeInfoPessoa(pessoa, 'nome'));
console.log(exibeInfoPessoa(pessoa, 'cpf'));