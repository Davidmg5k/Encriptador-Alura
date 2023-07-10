import Encriptador from "./encriptador.js"

const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const llaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function encriptar() {
  const encriptador = new Encriptador(llaves, textarea.value)
  const textoEncriptado = encriptador.encriptarinfo();
  mensaje.value = textoEncriptado
  textarea.value = "";
  mensaje.style.backgroundImage = "none";
}

function desencriptar() {
  const textoEncriptado = desencriptarinfo(llaves, textarea.value);
  mensaje.value = textoEncriptado
  textarea.value = "";
}

function desencriptarinfo(llaves, aDesencriptar){
  aDesencriptar = aDesencriptar.toLowerCase();
  for(let i = 0; i < llaves.length; i++){
    if(aDesencriptar.includes(llaves[i][0])){
      aDesencriptar = aDesencriptar.replaceAll(llaves[i][1], llaves[i][0]);
    }
  }
  return aDesencriptar;
}

function copiar(){
  mensaje.select();
  document.exeCommand("copy")
}

document.getElementById("btn-encriptar").onclick = encriptar;
document.getElementById("btn-desencriptar").onclick = desencriptar;
document.getElementById("copiar").onclick = copiar;