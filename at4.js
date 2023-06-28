
// Atividade 4: Verificação de disponibilidade de produto em estoque

// Descrição: Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto e 
// verifique se há quantidade suficiente em estoque. Caso haja, 
//exiba uma mensagem informando a disponibilidade; caso contrário, informe que o produto está indisponível.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite quantas calças você quer comprar: ", (numCalca) =>{
    console.log("Calças, ", numCalca);
    
    if (numCalca <= 20){
        console.log("A quantidade de itens está disponível.");
    }else{
        console.log("Não há itens suficientes.");
    }
      rl.close();
});
