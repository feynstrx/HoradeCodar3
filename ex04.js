function executarExercicio4() {
    alert("Cálculo da média aritmética dos números inteiros entre 15 e 100.");

    let total = 0;
    let quantidade = 0;

    for (let i = 15; i <= 100; i++) {
        total += i;
        quantidade++;
    }

    let media = (total / quantidade).toFixed(2);

    alert(`A média aritmética entre 15 e 100 é: ${media}`);
    console.log(`Média calculada: ${media}`);
}
