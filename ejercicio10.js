let figura = parseInt(
  window.prompt("Escribe circulo, cuadrado o triangulo para saber su área")
);

let circulo;
let cuadrado;
let triangulo;

const pi = 3.141592;

function circulo(num1) {
  let resultado1 = (num1 * num1) / pi;
  return resultado1;
}
function cuadrado(num2) {
  let resultado2 = (num2 * num2) / 2;
  return resultado2;
}
function triangulo(num3) {
  let resultado3 = num3 * num3;
  return resultado3;
}

if (figura === "circulo") {
  radio = parseInt(window.prompt("Escribe el radio del círculo"));
  console.log(circulo(radio));
} else if (figura === "cuadrado") {
  base = parseInt(window.prompt("Escribe la base del cuadrado"));
  altura = parseInt(window.prompt("Escribe la altura del cuadrado"));
  console.log(cuadrado(base*altura))
} else if (figura === "triangulo") {
  lado = parseInt(window.prompt("Escribe el lado del triángulo"));
  console.log(triangulo(lado*lado))
} else{
    window.alert('Eso no es correcto')
}
