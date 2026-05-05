//Importa o módulo Prompt-sync no projeto
const PromptSync = require("prompt-sync")();

//Declaração de variáveis
let idade1 = parseFloat(PromptSync('Digite a primeira idade: '));
let idade2 = parseFloat(PromptSync('Digite a segunda idade: '));
let idade3 = parseFloat(PromptSync('Digite a terceira idade: '));
let idade4 = parseFloat(PromptSync('Digite a quarta idade: '));

//Uso de estruturas de decisão para verificar se a pessoa é maior de idade ou não, já que a
//mensagem é diferente para cada uma delas 
if(idade1 > 18){
    console.log('A pessoa com a idade 1 é maior de idade');
}
else{
    console.log('A pessoa com a idade 1 é menor de idade');
}
if(idade2 > 18){
    console.log('A pessoa com a idade 2 é maior de idade');
}
else{
    console.log('A pessoa com a idade 2 é menor de idade');
}
if(idade3 > 18){
    console.log('A pessoa com a idade 3 é maior de idade');
}
else{
    console.log('A pessoa com a idade 3 é menor de idade')
}
if(idade4 > 18){
    console.log('A pessoa com a idade 4 é maior de idade')
}
else{
    console.log('A pessoa com a idade 4 é menor de idade')
}