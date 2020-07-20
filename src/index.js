/*import cipher from './cipher.js';

console.log('cipher   c ');*/

import cipher from './cipher.js';
//escuchar eventos del DOM, invocar `cipher.encode()`
//o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.

//crear variable del texto de entrada, usuario
let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);

//Dar funciones a los botones en HTML
//boton encriptar
document.getElementById("encriptar").addEventListener("click", function(){let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);})
//boton desencriptar
document.getElementById("desencriptar").addEventListener("click", function(){let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);})
//boton delete
document.getElementById("delete").addEventListener("click", function(){let txt_entrada= document.getElementById("delete").value;
console.log(txt_entrada);})

//capturar offset, luego enviar al cipher.js, para ello creo variable desplazamiento
let desplazamiento= document.getElementById("desplazamiento").value;
console.log(desplazamiento);

//crear variable del texto cifrado
let txt_cifrado= document.getElementById("txt_salida").value;

/* RESUMEN DEL VIDEO DE MICHELL
ALFABETO 1-POSICIÓN NORMAL
A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

Fórmula 1 Michell: (posicionLetra+desplazamiento)%tamañoAlfabeto

ASCII
A  B  C  D  E  F  G  H  I  J   K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

"A".chartCodeAt (0) = 65
"B".chartCodeAt (1) = 66
"C".chartCodeAt (2) = 67
String.fromCharCode(72)
desplazamiento: 

ASCII
((códigoLetraAscci-codigoPrimeraLetraAscci+desplazamiento1abc)%tamañoAlfabeto)+65   */
/*El 65 al final es el código de la primera letra, es para obtener el código ASCII
ejm:
(75+65+5)
*/

let ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function cifrar(ABC){

}
