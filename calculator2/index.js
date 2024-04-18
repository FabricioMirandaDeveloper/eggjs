const cantidad = Number(prompt("¿Cuántos números desea sumar?"));

let sumatoria = 0

for (let index = 1; index <= cantidad; index++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroAsumar;
}
alert(sumatoria)