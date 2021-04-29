let num = parseInt(window.prompt("Introduce un número"));

function numeroCifras(numero) {
  if (numero >= 0) {
    let cif = numero.toString();
    let cifras = cif.length;
    return window.alert(`Las cifras del número ${num} son ${cifras}`);
  } else {
    return "El número introducido es negativo";
  }
}
window.alert(numeroCifras(num));
