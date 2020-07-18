/*import cipher from './cipher.js';

console.log('cipher   c ');*/

import cipher from './cipher.js';
let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);

document.getElementById("ENCRIPTAR").addEventListener("click", function(){let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);})

document.getElementById("DESENCRIPTAR").addEventListener("click", function(){let txt_entrada= document.getElementById("txt_inicio").value;
console.log(txt_entrada);})

//capturar offset, luego enviar al cipher.js