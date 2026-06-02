//- Menu de Bebidas: 1. Café, 2. Chá, 3. Suco, 4. Água. Imprima a escolha ou "Opção inválida".
const prompt = require('prompt-sync')();

console.log("Menu de Bebidas:");
console.log("1. Café");
console.log("2. Chá");
console.log("3. Suco");
console.log("4. Água");

const opção = prompt("Escolha uma opção (1-4): ");

switch (opção) {
    case '1': console.log("Você escolheu Café."); break;
    case '2': console.log("Você escolheu Chá."); break;
    case '3': console.log("Você escolheu suco.");break;
    case '4': console.log("Você escolheu Água."); break;
    default: console.log("Opção invalida."); break;
};