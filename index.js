
function subirComentario() {
    console.log("Holis")
    document.getElementById("boton").addEventListener("click")
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;
    var nuevoComentario = {nombre: nombre, comentario: comentario};
    var li = document.createElement("li");
    li.appendChild(nuevoComentario.comentario)
    var div = document.getElementById("comentarios")
    div.appendChild(li)
    document.getElementById("nombre").value = "";
    document.getElementById("comentario").value = "";
}
