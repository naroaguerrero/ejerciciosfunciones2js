numero = parseInt(window.prompt('¿Quieres saber si un número es par?'))

function esPar(numero) {
  let respuesta;
  numero % 2 === 0 ? (respuesta = true) : (respuesta = false);
  return respuesta;
}

window.alert(esPar(numero))



