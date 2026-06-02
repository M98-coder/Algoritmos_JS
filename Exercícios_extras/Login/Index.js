//- Login Simples: Verifique se uma variável usuario é igual a "admin" e senha é "1234".

const prompt = require('prompt-sync')();

const usuario = prompt('Digite o nome de usuário: ');
const senha = prompt('Digite a senha: ');

if (usuario === 'admin' && senha === '1234') {
    console.log('Login bem-sucedido!');
}
else {    
    console.log('Login falhou. Usuário ou senha incorretos.');
};