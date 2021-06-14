var errores = document.getElementById("errores");
var comentarios = document.getElementById("comentarios");

function asd(){
    if (validar()){
        p1 = document.createElement("p");
        p2 = document.createElement("p");
        p1.innerText = nombre.value + ":";
        p2.innerHTML = texto.value;
        p1.classList.add("nombre");
        p2.classList.add("comentario");
        comentarios.appendChild(p1);
        comentarios.appendChild(p2);
        nombre.value="";
        texto.value="";
        return false;
    }
    return false;
}

function validar(){
    errores.innerHTML="";
    var retorno = true;
    if (nombre.value == ""){
        var a = document.createElement("p");
        a.innerText="El nombre no puede estar en blanco.";
        errores.appendChild(a);
        retorno=false;
    }
    if (nombre.value.length > 20){
        var a = document.createElement("p");
        a.innerText="El nombre no puede tener mas de 20 caracteres.";
        errores.appendChild(a);
        retorno=false;
    }
    if (texto.value == ""){
        var a = document.createElement("p");
        a.innerText="El comentario no puede estar en blanco.";
        errores.appendChild(a);
        retorno=false;
    }
    if (texto.value.length > 200){
        var a = document.createElement("p");
        a.innerText="El comentario no puede tener mas de 200 caracteres.";
        errores.appendChild(a);
        retorno=false;
    }
    return retorno;
}