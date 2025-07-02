const listaEstudantes = ['João', 'Lucas', 'Rodrigo', 'Ana', 'Maria'];

//Método Splice() tanto adiciona elementos quanto remove antigos.
// --- 1° número índice - Inicio da remoção / Número após ele indica a quantidade de elementos que sofrerão a ação.
listaEstudantes.splice(2, 2, 'Marcos', 'Abilene');

console.log(listaEstudantes);