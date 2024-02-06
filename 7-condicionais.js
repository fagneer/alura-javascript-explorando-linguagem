console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro',
    'Curitiba'
);

const idadeComprador = 16;

console.log("Destinos Possíveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log('Comprador maior de idade');
    listaDeDestinos.splice(1,1); //removendo item
}else{
    console.log('Comprador não é maior de idade e não posso vender');
}

console.log(listaDeDestinos);

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);



