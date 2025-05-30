function executarExercicio7() {
    alert("Escreva um algoritmo para ler as notas de um aluno, calcular e imprimir a média. Serão 6 notas entre 0 e 10.");

    let soma = 0;

    for (let i = 0; i < 6; i++) {
        let nota;

        do {
            nota = parseFloat(prompt(`Digite a nota ${i + 1} do aluno (entre 0 e 10):`));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                alert("Valor inválido. Por favor, digite uma nota válida entre 0 e 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);

        soma += nota;
    }

    let media = (soma / 6).toFixed(2);
    alert(`A média do aluno é: ${media}`);
    console.log(`Média calculada: ${media}`);
}
