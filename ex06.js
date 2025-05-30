function executarExercicio6() {
    alert("Ler 2 notas de um aluno, calcular e imprimir a média final. A nota de aprovação é 9,5.");

    let alunosAprovados = 0;
    let continuar;

    do {
        let nota1, nota2;

        // Validando a entrada de notas
        do {
            nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
            if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
                alert("Nota inválida. Insira um número entre 0 e 10.");
            }
        } while (isNaN(nota1) || nota1 < 0 || nota1 > 10);

        do {
            nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10):"));
            if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
                alert("Nota inválida. Insira um número entre 0 e 10.");
            }
        } while (isNaN(nota2) || nota2 < 0 || nota2 > 10);

        // Cálculo da média
        let media = ((nota1 + nota2) / 2).toFixed(2);
        alert(`Média final: ${media}`);

        if (media >= 9.5) {
            alert("Aluno aprovado!");
            alunosAprovados++;
        } else {
            alert("Aluno reprovado.");
        }

        continuar = prompt("Calcular a média de outro aluno? (S/N)").toUpperCase();
    } while (continuar === "S");

    alert(`Quantidade de alunos aprovados: ${alunosAprovados}`);
    console.log(`Total de alunos aprovados: ${alunosAprovados}`);
}
