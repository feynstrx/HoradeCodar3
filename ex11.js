function executarExercicio11() {
    alert("Escreva um programa em que o usuário informe 10 valores e veja quantos estão entre 24 e 42.");

    let dentroIntervalo = 0;
    let foraIntervalo = 0;

    for (let i = 0; i < 10; i++) {
        let valor = prompt(`Informe o valor ${i + 1}:`);
        
        if (!valor || isNaN(valor)) {
            alert("Entrada inválida. Por favor, insira um número.");
            i--; // Volta uma iteração para garantir que receba 10 números válidos.
            continue;
        }

        valor = parseInt(valor);

        if (valor >= 24 && valor <= 42) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    }

    console.log(`Valores dentro do intervalo [24, 42]: ${dentroIntervalo}`);
    console.log(`Valores fora do intervalo: ${foraIntervalo}`);
    alert("Tabulação concluída! Veja os resultados no console.");
}
