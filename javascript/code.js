//Evento del boton Encriptar
document.getElementById("buttonEncrypt").addEventListener("click", function(){
    //de esta forma capturamos lo que este en el texarea
    var textareaContent = document.getElementById("myTextArea").value;
    if(textareaContent == ""){
        alert("Debe de escribir algo")
    }else{
        alert("Contenido del text area: "+textareaContent)
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