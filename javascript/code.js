var arrayVowels = ["a","e","i","o","u"]
var arrayEncrypt = ["ai","enter","imes","ober","ufat"]
//Funcion encriptar
function encrypt(text){
    var separateText = []
    //recorremos el texto
    for(var i=0; i<text.length; i++){
        //console.log(text[i])
        var exists = false
        //verificamos que la letra este entre las letras que se deben de encriptar 
        for(var j=0; j<arrayVowels.length; j++){
            if(text[i]==arrayVowels[j]){
                //si la encuentra agregamos el texto encriptado segun la letra 
                //console.log(text[i],arrayEncrypt[j]);
                separateText.push(arrayEncrypt[j])
                exists = true
            }
        }
        if(!exists){
            separateText.push(text[i]);
        }   
    }
    return separateText.join("")
}
//Funcion desencriptar
function decrypt(text){
    /*al colocarlo entre las diamonales y poner la g al final indicamos que se aplique a 
    todas las subcademas similare
    */
    return text.replace("ai","a")
    .replace(/enter/g,"e")
    .replace(/imes/g,"i")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")
}
function moveEncrypt(labelEncrypt){
        labelEncrypt.style.visibility = "visible"

        //obtenemos la equiteta donde esta el boton copiar y la hacemos visible 
        var buttonCopy = document.getElementById("idAreButtonCopy")
        buttonCopy.style.visibility  = "visible"

        var imageArea = document.getElementById("idAreaImageEncrypt")
        imageArea.style.display = "none"
}
//Evento del boton Encriptar
document.getElementById("buttonEncrypt").addEventListener("click", function(){
    //de esta forma capturamos lo que este en el texarea
    var textareaContent = document.getElementById("myTextArea").value;
    if(textareaContent == ""){
        alert("Debe de escribir algo")
    }else{
        //obtenemos la etiqueta del label con un id 
        var labelEncrypt = document.getElementById("myLabelEncrypt")
        //le agregamos al contenido el mensaje cifrado 
        labelEncrypt.textContent = encrypt(textareaContent)
        moveEncrypt(labelEncrypt)
    }
})
//Evento del boton desencriptar
document.getElementById("buttonDecrypt").addEventListener("click", function(){
    //de esta forma capturamos lo que este en el texarea
    var textareaContent = document.getElementById("myTextArea").value;
    if(textareaContent == ""){
        alert("Debe de escribir algo")
    }else{
        //obtenemos la etiqueta del label con un id 
        var labelEncrypt = document.getElementById("myLabelEncrypt")
        //le agregamos al contenido el mensaje cifrado 
        labelEncrypt.textContent = decrypt(textareaContent)
        moveEncrypt(labelEncrypt)
    }
})