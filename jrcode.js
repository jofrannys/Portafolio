var btnEncriptar = document.querySelector("#encriptar");
var btnDesencriptar = document.querySelector("#desencriptar");
var dibujo = document.querySelector(".dibujo");
var h3 = document.querySelector(".contenedorh3");
var parrafo = document.querySelector(".parrafo");
var resultado = document.querySelector("#resultado");
const btnCopiar = document.querySelector("#copiar");
var seccion1 = document.querySelector(".seccion1")


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function validarMensaje(){
    var area = recuperarTexto();
    var letrasNoValidas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ´ ";
    var letrasValidas = "abcdefghijklmnñopqrsteuvwxyz ";
     for (letras of area){
        if (area == letrasNoValidas){
            resultado = area(".area");
            return alert("error");
        }
        
        else if(resultado == letrasValidas){
            return resultado;
        }
        
    }
    
    return resultado;
}

function encriptar(){
    validarMensaje();
    ocultarAdelante();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
   

}
function desencriptar(){
    ocultarAdelante();
    validarMensaje();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}


btnCopiar.addEventListener("click", copiar = () => {
var contenido = document.querySelector("#resultado").textContent;
navigator.clipboard.writeText(contenido);});

function recuperarTexto(){
    var area = document.querySelector(".area");
   return area.value;

}
function ocultarAdelante(){
    dibujo.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i<texto.length; i++){
        if(texto[i] =="a"){
            textoFinal = textoFinal +"ai"
        }
        else if(texto[i] =="e"){
            textoFinal = textoFinal +"enter"
        }
        else if(texto[i] =="i"){
            textoFinal = textoFinal +"imes"
        }
        else if(texto[i] =="o"){
            textoFinal = textoFinal +"ober"
        }
        else if(texto[i] =="u"){
            textoFinal = textoFinal +"ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i<texto.length; i++){
        if(texto[i] =="a"){
            textoFinal = textoFinal +"a"
            i = i+1;
        }
        else if(texto[i] =="e"){
            textoFinal = textoFinal +"e"
            i = i+4;
        }
        else if(texto[i] =="i"){
            textoFinal = textoFinal +"i"
            i = i+3;
        }
        else if(texto[i] =="o"){
            textoFinal = textoFinal +"o"
            i = i+3;
        }
        else if(texto[i] =="u"){
            textoFinal = textoFinal +"u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;
}