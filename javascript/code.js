var arrayVowels = ["a","e","i","o","u"]
var arrayEncrypt = ["ai","enter","imes","ober","ufat"]

function encrypt(text){
    var separateText = []
    //recorremos el texto
    for(var i=0; i<text.length; i++){
        console.log(text[i])
        var exists = false
        //verificamos que la letra este entre las letras que se deben de encriptar 
        for(var j=0; j<arrayVowels.length; j++){
            if(text[i]==arrayVowels[j]){
                //si la encuentra agregamos el texto encriptado segun la letra 
                console.log(text[i],arrayEncrypt[j]);
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
function decrypt(text){

}
//Evento del boton Encriptar
document.getElementById("buttonEncrypt").addEventListener("click", function(){
    //de esta forma capturamos lo que este en el texarea
    var textareaContent = document.getElementById("myTextArea").value;
    if(textareaContent == ""){
        alert("Debe de escribir algo")
    }else{
        console.log(encrypt(textareaContent))
    }
})
//Evento del boton desencriptar
document.getElementById("buttonDecrypt").addEventListener("click", function(){
    //de esta forma capturamos lo que este en el texarea
    var textareaContent = document.getElementById("myTextArea").value;
    if(textareaContent == ""){
        alert("Debe de escribir algo")
    }else{
        alert("Contenido del text area: "+textareaContent)
    }
})