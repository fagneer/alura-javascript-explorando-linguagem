console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba',
    'Recife',
    'Manaus'
);

const idadeComprador = 26;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

/* 
if (idadeComprador >= 18) {
    console.log('Comprador maior de idade');
    listaDeDestinos.splice(1, 1); //removendo item
} else if (estaAcompanhada) {
    console.log('Comprador menor de idade e está acompanhado');
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log('Comprador menor de idade e não está acompanhado');
}
*/

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log('Boa Viagem!');
    listaDeDestinos.splice(2, 1); //removendo item
}  else {
    console.log('Comprador menor de idade e não está acompanhado');
}

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem!');
} else {
    console.log('Você não pode embarcar');
}


console.log(listaDeDestinos);

/* 
console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
*/

