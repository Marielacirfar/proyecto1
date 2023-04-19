let button = document.getElementById("boton")
button.addEventListener("click", subirComentario)
function subirComentario(evento) {
    evento.preventDefault();
    var comentario = document.getElementById("cajacomentarios").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(comentario))
    let ul = document.getElementById("comentariosul")
    ul.appendChild(li)
    document.getElementById("cajacomentarios").value = "";
}
