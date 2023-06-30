
// Atividade 7: Verificação de login e senha

// Descrição: Crie um programa que solicite ao usuário um login e uma senha. 
// Em seguida, verifique se o login e a senha correspondem aos valores pré-definidos. 
// Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

const login = "admin";
const senha = "admin";

rl.question("Digite o login: ", (loginUser) =>{
    rl.question("Digite a senha: ", (senhaUser) =>{
        if(loginUser === login && senhaUser === senha){
            console.log("Login bem sucedido!");
        } else {
            console.log("Login inválido!");
        }
        rl.close();
    });
});
