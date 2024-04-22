function palindrome (string) {
    const newString = string.split("").reverse()
    const reverseString = newString.join("")
    if (string == reverseString) {
        return console.log(true)
    }else {
        return console.log(false)
    }
}
palindrome("hello")
/* debe imprimir false */
palindrome("hannah")
/* debe imprimir true. */