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
const destino = "Recife";

console.log("\nDestinos Possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;


while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        break;
    }
    contador += 1;
}
