let figura = parseInt(
  window.prompt("Escribe circulo, cuadrado o triangulo para saber su área")
);

const pi = 3.141592;

if (figura === "circulo") {
  let radio = parseInt(window.prompt("Escribe el radio del círculo"));
  console.log(circulo(radio));
} else if (figura === "cuadrado") {
  let base = parseInt(window.prompt("Escribe la base del cuadrado"));
  altura = parseInt(window.prompt("Escribe la altura del cuadrado"));
  console.log(cuadrado(base * altura));
} else if (figura === "triangulo") {
  let lado = parseInt(window.prompt("Escribe el lado del triángulo"));
  console.log(triangulo(lado * lado));
}

function areaCirculo(radio) {
  return (parseInt = (radio * 2) / pi);
}
function areCuadrado(base, altura) {
  return (parseInt = (base * altura) / 2);
}
function areTriangulo(lado) {
  return (parseInt = lado * lado);
}
