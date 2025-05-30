function executarExercicio2() {
    document.write("<h2>Iniciando contagem regressiva...</h2>");

    let contadora = 30;

    let intervalo = setInterval(() => {
        document.write(`<h3>00:${contadora}</h3>`);

        if (contadora === 0) {
            clearInterval(intervalo);
            document.write("<h1>💥 EXPLOSÃO 💥</h1>");
        }

        contadora--;
    }, 1000);
}
