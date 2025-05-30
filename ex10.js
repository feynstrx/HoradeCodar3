function executarExercicio10() {
    alert("Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.");

    let n = parseInt(prompt("Digite um número para a tabuada:"));

    if (isNaN(n) || n <= 0) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    let tabuadas = "";
    for (let i = 1; i <= n; i++) {
        tabuadas += `Tabuada de ${i}:\n`;
        for (let j = 1; j <= 10; j++) {
            tabuadas += `${i} x ${j} = ${i * j}\n`;
        }
        tabuadas += "\n";
    }
    
    console.log(tabuadas); // Exibindo no console para melhor leitura
    alert("Tabuadas geradas! Confira no console.");
}
