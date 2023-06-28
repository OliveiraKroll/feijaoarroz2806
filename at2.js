//     Atividade 2: Calculadora de IMC (Índice de Massa Corporal)

// Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e calcule o seu IMC. 
// Exiba uma mensagem com o resultado, indicando se o usuário está abaixo do peso, no peso ideal ou acima do peso.

const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question('Digite seu nome ', (nome) =>{
    console.log('Olá, ', (nome));
    rl.question('Digite seu peso em kg ', (peso) =>{
        console.log('Peso, ', (peso));
        rl.question('Digite sua altura em metros ', (altura) =>{
            console.log('Altura, ', (altura));

            let IMC = Number(peso / (altura*altura));
            console.log(IMC)
            if (IMC <= 18){
                console.log("Magreza extrema");
            }else if (IMC > 18 && IMC < 25){
                console.log("Normal.");
            }else if (IMC > 25 && IMC < 30) {
                console.log("Sobrepeso.");
            }else if (IMC >= 30){
                console.log("Obesidade.")
            }else{
                console.log("IMC inválido.")
            }
            rl.close();
        });
    });
});