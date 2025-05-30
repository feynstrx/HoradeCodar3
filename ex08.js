function executarExercicio8() {
    alert("Ler um valor N e imprimir todos os valores inteiros entre 1 e N (inclusive).");

    let N = prompt("Digite um valor para N (maior que zero): ");

    if (!N || isNaN(N) || N <= 0) {
        alert("Por favor, insira um número válido maior que zero.");
        return;
    }

    N = parseInt(N);
    let numeros = [];

    for (let i = 1; i <= N; i++) {
        numeros.push(i);
    }

    alert("Valores de 1 a N: " + numeros.join(", "));
    console.log("Valores de 1 a N:", numeros.join(", "));
}
