
import cipher from './cipher.js';
//console.log('cipher   c ');

//crear variable para traer el cuadro de texto del html
//txt_entrada= document.getElementById("txt_inicio");

//Dar funciones a los botones en HTML
//boton encriptar
document.getElementById("encriptar").addEventListener("click", function(){
let txt_entrada= document.getElementById("txt_inicio");
let desplazamiento= parseInt(document.getElementById("desplazamiento").value);
//console.log(desplazamiento);
alert("Pincha el avioncito abajo cuando aparezca tu mensaje :)");
//crear variable del texto de entrada, usuario para reutilizarla
let texto = txt_entrada.value;
//console.log(texto);


//Crear un array para guardar resultado que nos retorna el metodo encode
//creamos variable de tipo cadena con los varoles dentro del array-método join
let resultado = new Array();
resultado = cipher.encode(desplazamiento, texto);
document.getElementById("txt_salida").textContent=resultado;

})
//boton desencriptar
document.getElementById("desencriptar").addEventListener("click", function(){
    let txt_entrada= document.getElementById("txt_inicio");
    let desplazamiento= parseInt(document.getElementById("desplazamiento").value);

    //console.log(desplazamiento);
//crear variable del texto de entrada, usuario para reutilizarla
    let texto = txt_entrada.value;
    //console.log(texto);

//Crear un array para guardar resultado que nos retorna el metodo encode
let resultado = new Array();
resultado = cipher.decode(desplazamiento, texto);
document.getElementById("txt_salida").textContent=resultado;
//en lugar de poner inneHTML, se reemplaza por textContent, ya que el inner,
//es más para agregar en html

})

//boton delete
//document.getElementById("delete").addEventListener("click", function(){
//let desplazamiento= parseInt(document.getElementById("desplazamiento").value);
//let texto = txt_entrada.value;
//console.log(texto);
//let txt_cifrado= document.getElementById("txt_salida").value;

    
//})

//capturar offset, luego enviar al cipher.js, para ello creo variable desplazamiento
//que ha sido agregada a las funciones

//crear variable del texto cifrado
//let txt_cifrado= document.getElementById("txt_salida").value;


     


