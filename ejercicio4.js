let num = parseInt(window.prompt("Escribe un número"))
let num2 = parseInt(window.prompt("Escribe otro número"))

function sumar(sumando1,sumando2){
    let suma = sumando1 + sumando2
    return suma
}

console.log(sumar(num,num2))