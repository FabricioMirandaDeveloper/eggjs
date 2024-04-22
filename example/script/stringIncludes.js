function stringIncludes(subtexto,texto) {
    if(texto.includes(subtexto)) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

stringIncludes("he","Hello")
/* debe imprimir false */
stringIncludes("he","hello world")
/* debe imprimir true */