let money = parseInt(
  window.prompt(
    "Escribe dólares, yenes o libras para saber su cantidad de euros"
  )
);

let dolares;
let yenes;
let libras;

function dolares(num1) {
  let resultado1 = 1.286111 * num1;
  return resultado1;
}
function yenes(num2) {
  let resultado2 = 129.852 * num2;
  return resultado2;
}
function libras(num3) {
  let resultado3 = 0.863 * num3;
  return resultado3;
}

if (money === "dolares") {
  dolaresMoney = parseInt(
    window.prompt("Escribe cantidad de euros para saberlo en dolares")
  );
  console.log(dolares(dolaresMoney));
} else if (money === "yenes") {
  yenesMoney = parseInt(
    window.prompt("Escribe cantidad de euros para saberlo en yenes")
  );
  console.log(yenes(yenesMoney));
} else if (money === "libras") {
  librasMoney = parseInt(
    window.prompt("Escribe cantidad de euros para saberlo en libras")
  );
  console.log(libras(lado * librasMoney));
} else {
  window.alert("Eso no es correcto");
}
