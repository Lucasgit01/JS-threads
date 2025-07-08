const Pfisica = {
    nome: 'Lucas Silva',
    idade: 21,
    nascimento: new Date(2004, 8, 16) ,
    cpf: '78964327896',
    profissao: 'Dev',
    Reservista: true,
    Certificados: [],
    endereco: {
        neighborhoord: 'Rua A',
        number: 5,
        city: 'Sao Paulo'
    }
};

const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);

const keyObj = Object.keys(Pfisica);
const entObj = Object.entries(Pfisica);
const vlObj = Object.values(Pfisica);
console.log(vlObj);

if(!keyObj.includes('endereco')) {
    console.error('É necessário um endereço!')
}