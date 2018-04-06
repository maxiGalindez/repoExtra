var a = 10;
var b = 11;
function mayorNum(a, b) {
    var salida = 0;
    if (a > b)
        salida = a;
    else if (b > a)
        salida = b;
    else
        salida = 0;
    return salida;
}
console.log(mayorNum(10, 11));
