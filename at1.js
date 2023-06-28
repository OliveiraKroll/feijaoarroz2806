//Atividade 1: Verificação de idade para entrada em uma festa Descrição: 
//Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar em uma festa (idade mínima de 18 anos). 
//Exiba uma mensagem informando se a entrada é permitida ou não.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite a sua idade para verificação: ", (num) =>{
    num = Number(num);
    if (num >= 18 && num < 65){
        console.log("Entrada permitida.");
    }else{
        console.log("Entrada proibida.");
    }
      rl.close();
});