/* CREANDO UNA FUNCION QUE VALIDAD LA CANTIDAD DE CARACTERES
 */
function lengthOf(texto) {
    if(texto.length <= 0) {
        console.log("Invalid input")
    }else {
        return texto.length
    }
}
console.log(lengthOf("Fabricio"))
console.log(lengthOf(""))