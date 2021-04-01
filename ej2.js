var a = 100;
var cadena = "";
function repetirNumero(numero) {
    for (let i = 0; i < numero; i++) {
        cadena += numero;
    }
    return cadena;
}
console.log("La cadena de números es: " + cadena);
// la cadena de números es:

/*-------------------------------------------------*/

function resultadoNota(nota){
	if (Number(nota) == nota) {
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				console.log("Muy deficiente");
			}
			else if (nota < 5) {
				console.log("Insuficiente");
			}
			else if (nota < 6) {
				console.log("Suficiente");
			}
			else if (nota < 7) {
				console.log("Bien");
			}
			else if (nota < 9) {
				console.log("Notable");
			}
			else if (nota >= 9) {
				console.log("Sobresaliente");
			}
		}
		else {
			console.log("Nota errónea");
		}
	}
	else {
		if (nota != undefined) {
			console.log("Introduce un número válido");
		}
	}
}

resultadoNota(4.5) // insuficiente
resultadoNota(9)  // Sobresaliente
resultadoNota("A") // Introduce un número válido
resultadoNota(11) // Sobresaliente 
resultadoNota(-1) // //Nota Erronea 

/*-----------------------------------------------------------------------*/
function numeroPasos(numero) { // numero = 23
    var pasos = 0; 
    while (numero >= 1) {                                              
        if (numero % 2 == 1 && numero > 1) {                       
            numero--;   2 -> 1 
            pasos++; 6 -> 7
        }                                                          
        pasos++;  7 -> 8   
        numero /= 2; 1 / 2 -> 0.5
    }
    return pasos;
}
var pasos = 8;
console.log("Se necesitaron: " + pasos + " pasos para llegar a 0");



