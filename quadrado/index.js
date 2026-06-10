const prompt = require('prompt-sync')();

let num = 0;
let quadrado = 0;

num = parseFloat(prompt("Informe o número para obter o seu quadrado: "));

quadrado = Math.pow(num, 2);

console.log(`O quadrado de ${num} é ${quadrado}`);