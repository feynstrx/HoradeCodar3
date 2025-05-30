function executarExercicio9() {
    alert("Os 10 primeiros números inteiros maiores que 100 são:");

    let numeros = [];
    for (let i = 101; i <= 110; i++) {
        numeros.push(i);
    }

    alert(numeros.join(", ")); // Exibe os números em um único alerta
    console.log(numeros.join(", ")); // Exibe no console
}