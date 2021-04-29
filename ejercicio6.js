do {
  let num1 = parseInt(window.prompt("Introduce un número"));
  let num2 = parseInt(window.prompt("Introduce otro número"));

  window.alert(dividir(num1, num2));
} while (num2 !== 0);

function dividir(numero1, numero2) {
  return numero1 / numero2;
}
