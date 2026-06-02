//- Turno de Estudo: Receba "M", "V" ou "N" e imprima "Bom dia", "Boa tarde" ou "Boa noite".

const prompt = require('prompt-sync')();

const turno = prompt('Digite a letra inicial de seu turno: ');

switch (turno) {
    case 'M' : console.log("Bom dia"); break;
    case 'V' : console.log("Boa tarde"); break;
    case 'N' : console.log("Boa noite"); break;
    default : console.log("Valor inválido"); break;
};