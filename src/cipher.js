import { escapeSelector } from "jquery";

const cipher = {
 
};
export default cipher;
//estructura de objetos, que va a guardar encode y decode
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

ASCII
((códigoLetraAscci-codigoPrimeraLetraAscci+desplazamiento1abc)%tamañoAlfabeto)+65   */
/*El 65 al final es el código de la primera letra, es para obtener el código ASCII
ejm:
(75+65+5)
*/

//Función cifrado: cipher.encode(offset, string)

function cifrar(offset,string){
    console.log(offset, string)
    let resultado = '';
    // recorrer la cadena con un FOR
    for (let i = string.length -1; i=>0; i++){
        console.log(string[i]);
    }
  
      // console.log() del elelemnto en la posición i 
  
      // obtener el número ASCII de la letra con chartCodeAt()
  
      // aplicar la fórmula de cifrado de la letra
  
      // convertir el resultado de la fórmula en letra con fromCartCodeAt()
  
      // guardar letra cifrada en variable resultado.
  
    console.log(resultado);
    return resultado;
  }
  
  let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let desplazamiento = 3;
  
  cifrar(desplazamiento, abc);    
  