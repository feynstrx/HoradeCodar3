function executarExercicio5() {
    alert("Calcule a média aritmética entre dois números inteiros informados pelo usuário e todos os números entre eles.");

    let numero1 = parseInt(prompt("Informe um número inteiro menor: "));
    let numero2 = parseInt(prompt("Informe um número inteiro maior: "));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Valores inválidos. Insira apenas números inteiros.");
        return;
    }

    if (numero1 >= numero2) {
        alert("O segundo número deve ser maior que o primeiro.");
        return;
    }

    let total = 0;
    let quantidade = 0;

    for (let i = numero1; i <= numero2; i++) {
        total += i;
        quantidade++;
    }

    let media = (total / quantidade).toFixed(2);

    alert(`A média aritmética dos números entre ${numero1} e ${numero2} é: ${media}`);
    console.log(`Média calculada entre ${numero1} e ${numero2}: ${media}`);
}
