//- Calculadora Básica: Receba dois números e um operador (+, -, *, /) e realize a operação.

const prompt = require('prompt-sync')();

const operação = prompt('Digite a operação (+, -, *, /): ');
const num1 = parseFloat(prompt('Digite o primeiro número: '));
const num2 = parseFloat(prompt('Digite o segundo número: '));

if (operação === '+') {
    console.log(`Resultado: ${num1 + num2}`);
}
else if (operação === '-') {
    console.log(`Resultado: ${num1 - num2}`);
}
else if (operação === '*') {
    console.log(`Resultado: ${num1 * num2}`);
}
else if (operação === '/') {
    if (num2 !== 0) {
        console.log(`Resultado: ${num1 / num2}`);
    } else {
        console.log('Erro: Divisão por zero não é permitida.');
    }
}
else {
    console.log('Operação inválida. Por favor, escolha entre +, -, *, /.');
}