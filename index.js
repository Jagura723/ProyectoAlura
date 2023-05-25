const areaEncriptador = document.querySelector("#encriptarDesencriptar");
const areaResultado = document.querySelector("#resultado");

function verificarTexto() {
    let iTexto = document.getElementById("encriptarDesencriptar").value;
    if(/[A-ZÁÉÍÓÚáéíóú]/.test(iTexto)) {
        alert("El texto contiene mayúsculas o acentos.");
        areaResultado = ""
        return false; 
    }
}

function btnEncrip(){
   
    const Textencrip = codificar(areaEncriptador.value)
    areaResultado.value = Textencrip
    areaEncriptador.value = "" ;
   
    if(Textencrip !=0){
        document.getElementById("mensaje1").innerHTML = "Mensaje codificado."
        document.getElementById("mensaje2").innerHTML = "Nadie sabra tu secreto."
        areaResultado.style.backgroundImage = "none"
    }
    else{
        document.getElementById("mensaje1").innerHTML = "Upps"
        document.getElementById("mensaje2").innerHTML = "Ningun texto fue encontrado."
        document.getElementById("resultado").style.backgroundImage = "url('imagenes/alerta1.jpg')";
       
      
    }


}

function codificar(stringEncriptar){
    let verificar = verificarTexto();
    if(verificar == false){
        return;
    }

    let matrizCodigo = [["e", "enter"],["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];

    stringEncriptar = stringEncriptar.toLowerCase()

        for( let i = 0; i < matrizCodigo.length; i++){

            if(stringEncriptar.includes(matrizCodigo[i][0])){
                stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }

        }   
        return stringEncriptar
    
}

function btndencrip(){
    const TextDesencrip = decodificar(areaEncriptador.value)
    areaResultado.value = TextDesencrip
    areaEncriptador.value = "";
    
    if(TextDesencrip !=0){
        areaResultado.style.backgroundImage = "none"
        document.getElementById("mensaje1").innerHTML = "Mensaje desencriptado."
        document.getElementById("mensaje2").innerHTML = "Tienes suerte de que aun recordemos el cifrado."
    }
        else{
            document.getElementById("mensaje1").innerHTML = "Upps"
            document.getElementById("mensaje2").innerHTML = "Me temo que no puedo ayudarte."
            document.getElementById("resultado").style.backgroundImage = "url('imagenes/codificar.jpg')";
          
        }

}
function decodificar(stringDesencriptar){

    let matrizCodigo = [["e", "enter"],["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptar = stringDesencriptar.toLowerCase()

    for( let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
       
    }
    return stringDesencriptar
}

function copiar(){
   var copiando = areaResultado.value
        if(copiando ==="" ){
            
            alert("Ningun texto para copiar.");
        }
        else{
            var copiando = document.getElementById("resultado");
            copiando.select();
            document.execCommand("copy")
            document.getElementById("mensaje1").innerHTML = "Excelente"
            document.getElementById("mensaje2").innerHTML = "Tu mensaje fue copiado."
            areaEncriptador.value = document.getElementById("resultado").value;
            
        }
}












/*function encriptar(){
    var frase = document.getElementById("encriptarDesencriptar").value.toLowerCase();

    var encriptarDesencriptar = frase.replace(/e/img, "emter");
    var encriptarDesencriptar = encriptarDesencriptar.replace(/i/img, "ines");
    var encriptarDesencriptar = encriptarDesencriptar.replace(/a/img, "ai");
    var encriptarDesencriptar = encriptarDesencriptar.replace(/o/img, "ober");
    var encriptarDesencriptar = encriptarDesencriptar.replace(/u/img, "ufat");

    document.getElementById("resultado").innerHTML = encriptarDesencriptar;
   


} */ 
    
  
  
   