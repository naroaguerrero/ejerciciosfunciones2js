let numero = parseInt(window.prompt('Escribe un número entero para calcular el número de cifras'))

function sumar(valor) {
  let suma = 0;
  for (let i = 0; i < valor.length; i++) {
    suma += parseInt(valor[i]);
  }
}

window.alert(sumar(`El resultado de ${numero} es ${valor}`))