const contaBancaria = {
    titular: 'Lucas',
    saldo: 3000,
    depositar: function (valor) {
        return this.saldo += valor;
    },
    sacar: function (valor) {
        return this.saldo >= valor ? this.saldo -= valor : 'Saldo insuficiente!';
    }
}

const cliente = {
    nome: contaBancaria.titular,
    conta: contaBancaria,
    showCash: function (cli) {
        const Cli = cli.nome;
        const saldo = cli.conta.saldo;
        return `O saldo do cliente ${Cli} é de ${saldo}`;
    }
}

console.log(contaBancaria.depositar(300));
console.log(cliente.showCash(cliente));
console.log(contaBancaria.sacar(800));
console.log(cliente.showCash(cliente));
console.log(`${typeof cliente.conta.saldo} `)

//const pessoa = {
//    nome: "Ana",
//    idade: 25,
//    solteiro: true,
//    hobbies: ["Leitura", "Caminhada", "Fotografia"]
//};
//
//function mostrarInfoPessoa(pessoa) {
//    console.log("Informações da Pessoa:");
//    console.log(`Nome: ${pessoa.nome} (Tipo: ${typeof pessoa.nome})`);
//    console.log(`Idade: ${pessoa.idade} anos (Tipo: ${typeof pessoa.idade})`);
//    console.log(`Solteiro: ${pessoa.solteiro} (Tipo: ${typeof pessoa.solteiro})`);
//    console.log(`Hobbies: ${pessoa.hobbies.join(", ")} (Tipo: ${typeof pessoa.hobbies})`); // .join Realiza uma formatação separando elementos por vírgula
//}
//
//// Chamada da função mostrarInfoPessoa
//mostrarInfoPessoa(pessoa);