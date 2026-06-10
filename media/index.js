const prompt = require('prompt-sync')({signint: true});

let numero1 = parseFloat(prompt('Informe o 1º valor: '));
let numero2 = parseFloat(prompt('Digite a 2ª nota: '));
let numero3 = parseFloat(prompt('Informe a 3ª nota: '));

let media = (numero1 + numero2 + numero3)/3;

console.log(`A média das 3 notas é ${media.toFixed(2)}`);