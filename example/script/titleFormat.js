function titleFormat(text) {
    const text1 = text.charAt().toUpperCase()
    const text2 = text.slice(1,text.length).toLowerCase()
    return console.log(text1 + text2)
}

titleFormat("hello world")
titleFormat("HELLO world")
titleFormat("HellO WOrLd")
/* deben imprimir “Hello world” */

