import cipher from './cipher.js';

document.getElementById("txt").addEventListener ("keyup", function () {
  this.value=this.value.toUpperCase ();
});

document.getElementById("encode").addEventListener("click", onEncode);
function onEncode () {
  let offset = parseInt(document.getElementById('num').value);
  let str = document.getElementById('txt').value;

  const x = cipher.encode(offset,str);
  const resultado = String.fromCharCode.apply (null, x)
  document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById("decode").addEventListener("click", onDecode);
function onDecode () {
  let offset = parseInt(document.getElementById('num').value);
  let str = document.getElementById('txt').value;

  const x = cipher.decode(offset,str);
  const resultado = String.fromCharCode.apply (null, x)
  document.getElementById('resultado').innerHTML = resultado;
}
