let number = parseInt(window.prompt("Escribe un número"));
let number2 = parseInt(window.prompt("Escribe otro número"));

function mayorQue(num, num2) {
    num > num2 
  ? console.log(`El número ${num} es mayor`)
  : console.log(`El número ${num2} es mayor`);
}
mayorQue(number,number2)
