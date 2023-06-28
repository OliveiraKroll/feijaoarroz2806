
// Atividade 3: Conversão de moeda

// Descrição: Crie um programa que solicite ao usuário um valor em reais e faça a conversão desse valor para dólares, 
// utilizando uma taxa de câmbio fixa. Exiba o valor convertido.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Digite um valor em reais: ", (num) =>{
    console.log("Valor, ", num);

    const taxaCambio = 4
    const calculo = num / taxaCambio


    console.log("Valor convertido, ", calculo);

      rl.close();
});