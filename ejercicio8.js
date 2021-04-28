let numero = parseInt(window.prompt('¿Quieres saber el número factorial de un número?'))

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
window.alert(factorial(numero))