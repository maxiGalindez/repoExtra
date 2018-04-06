var a:number = 10;
var b:number = 11;
function mayorNum(a :number, b: number) : number{
    var salida = 0;
    if(a>b) salida = a;
    else if (b>a) salida = b;
    else salida = 0;
    return salida;
}
console.log(mayorNum(10, 11));

