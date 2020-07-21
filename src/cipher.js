/*const cipher = {
 
};
export default cipher;*/
//estructura de objetos, que va a guardar encode y decode
const cipher = {
 
};

// export default cipher;

//- `cipher.encode(offset, string)`: `offset` es el número de posiciones que
//queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
//que queremos cifrar
//- `cipher.decode(offset, string)`: `offset` es el número de posiciones que
//queremos mover a la izquierda en el alfabeto y `string` el mensaje
//(texto) que queremos descifrar.
//colocar su funcionalidad disponible para todo el proyecto, traes la funcionalidad al index.js

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

//Función cifrado
function encode(offset, string){
    let offset = document.getElementById("desplazamiento").value;
    let string = document.getElementById("txt_entrada").value;
    let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
    console.log('hola mundo');


/*encode(3, 'D')
    let offset = document.getElementById("3").value;
    let string = document.getElementById("D").value;

    console.log('hola mundo')*/
















//Función descifrado
/*function decode(offset, string){
    console.log('hola mundo')
}


encode(3, 'D')*/