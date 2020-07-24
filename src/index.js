
import cipher from './cipher.js';
//console.log('cipher   c ');

//crear variable para traer el cuadro de texto del html
let txt_entrada= document.getElementById("txt_inicio");

//Dar funciones a los botones en HTML
//boton encriptar
document.getElementById("encriptar").addEventListener("click", function(){
let txt_entrada= document.getElementById("txt_inicio");
let desplazamiento= document.getElementById("desplazamiento").value-0;

    //console.log(desplazamiento);
//crear variable del texto de entrada, usuario para reutilizarla
let texto = txt_entrada.value;
//console.log(texto);
alert("Pincha el avioncito para enviar tu juego")
//Crear un array para guardar resultado que nos retorna el metodo encode
let resultado = new Array();
resultado = cipher.encode(desplazamiento, texto);
document.getElementById("txt_salida").textContent=resultado.join("");

})
//boton desencriptar
document.getElementById("desencriptar").addEventListener("click", function(){
    let txt_entrada= document.getElementById("txt_inicio");
let desplazamiento= document.getElementById("desplazamiento").value-0;

    //console.log(desplazamiento);
//crear variable del texto de entrada, usuario para reutilizarla
let texto = txt_entrada.value;
//console.log(texto);
alert("Pincha el avioncito para enviar tu juego")
//Crear un array para guardar resultado que nos retorna el metodo encode
let resultado = new Array();
resultado = cipher.decode(desplazamiento, texto);
document.getElementById("txt_salida").textContent=resultado.join("");
//en lugar de poner inneHTML, se reemplaza por textContent, ya que el inner,
//es más para agregar en html

})

//boton delete
document.getElementById("delete").addEventListener("click", function(){
    let desplazamiento= document.getElementById("desplazamiento").value-0;
    let texto = txt_entrada.value.split("");
    console.log(texto);
})


//capturar offset, luego enviar al cipher.js, para ello creo variable desplazamiento
//que ha sido agregada a las funciones

//crear variable del texto cifrado
let txt_cifrado= document.getElementById("txt_salida").value;


     


