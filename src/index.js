/*import cipher from './cipher.js';

console.log('cipher   c ');*/

import cipher from './cipher.js';
console.log('cipher   c ')
//escuchar eventos del DOM, invocar `cipher.encode()`
//o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.

//crear variable para traer el cuadro de texto del html
let txt_entrada= document.getElementById("txt_inicio");

//Dar funciones a los botones en HTML
//boton encriptar
document.getElementById("encriptar").addEventListener("click", function(){
    let desplazamiento= document.getElementById("desplazamiento").value;
    console.log(desplazamiento);
//crear variable del texto de entrada, usuario para reutilizarla
    let texto = txt_entrada.value.split("");
    console.log(texto);
})
//boton desencriptar
document.getElementById("desencriptar").addEventListener("click", function(){
    let desplazamiento= document.getElementById("desplazamiento").value;
console.log(desplazamiento);
    let texto = txt_entrada.value.split("");
console.log(txt_entrada);
})

//boton delete
document.getElementById("delete").addEventListener("click", function(){
    let texto = txt_entrada.value.split("");
console.log(txt_entrada);
})

//capturar offset, luego enviar al cipher.js, para ello creo variable desplazamiento
//que ha sido agregada en a las funciones

//crear variable del texto cifrado
let txt_cifrado= document.getElementById("txt_salida").value;


     


