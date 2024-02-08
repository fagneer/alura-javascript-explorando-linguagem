console.log("\nTrabalhando com condicionais");

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
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 6) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}

for (let i = 0; i < 6; i++) {
    if (listaDeDestinos[i] == destino) {
        destinoExiste = true;
    }
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe, tivemos um erro!");
}