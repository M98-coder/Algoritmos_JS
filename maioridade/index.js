const prompt = require('prompt-sync')();

let maiores = 0, menores = 0;
let idade1 = parseInt(prompt('Informe a 1º idade: '));
let idade2 = parseInt(prompt('Digite a 2ª idade: '));
let idade3 = parseInt(prompt('Informe a 3ª idade: '));
let idade4 = parseInt(prompt('Digite a 4ª idade: '));

if (idade1 >= 18) { maiores++; } 
    else if (idade1 < 18) { menores++; } 

if (idade2 >= 18) { maiores++; } 
    else if (idade2 < 18) { menores++; } 

if (idade3 >= 18) { maiores++; } 
    else if (idade3 < 18) { menores++; } 

if (idade4 >= 18) { maiores++; } 
    else if (idade4 < 18) { menores++; } 

console.log(`Quantidade de pessoas maiores de idade é ${maiores}`);
console.log(`Quantidade de pessoas menores de idade é ${menores}`);