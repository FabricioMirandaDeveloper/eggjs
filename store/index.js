let totalApagar = 0
let compra = prompt("Cuantos productos va a llevar")

for (let index = 1; index <= compra; index++) {
    const nombre = prompt("¿Qué producto desea llevar?");
    const cantidad = Number(prompt("¿Cuántas unidades?"));
    const precio = Number(prompt("¿Cuánto sale cada unidad?"));
    const subtotal = cantidad * precio;
    totalApagar = totalApagar + subtotal;
}
alert(totalApagar)
