function executarExercicio3() {
    alert("Números de 10 a 1 em ordem decrescente:");

    let contadora = 10;
    let numeros = [];

    while (contadora >= 1) {
        numeros.push(contadora);
        contadora--;
    }

    alert(numeros.join(", "));
    console.log("Ordem decrescente:", numeros.join(", "));
}
