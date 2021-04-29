let cambio = parseInt(
  window.prompt(
    "Escribe dólares, yenes o libras para cambiar"
  )
);

let cantidad = parseInt(window.prompt("Escribe la cantidad en euros"))

function convertir(cantidad, moneda){
  if(moneda==="dolares"){
    return cantidad * 0.86
  } else if (moneda==="yenes"){
    return cantidad * 129.852
  } else if(moneda==="libras"){
    return cantidad * 1.28611
  } else{
    return 'No es correcto'
  }
}

window.prompt(`Tus ${cantidad} son ${convertir(cantidad, cambio)} en ${cambio}`)