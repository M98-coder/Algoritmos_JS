//- Dia da Semana: Receba um número (1-7) e retorne o dia correspondente (Segunda, Terça...).

const prompt = require('prompt-sync')();
const numero = parseInt(prompt('Digite um número de 1 a 7: '));

switch (numero) {
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira'); 
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Número inválido. Por favor, digite um número entre 1 e 7.');
}