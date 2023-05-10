let productCardStyle = ""
let productsDiv = document.getElementById("productsContainer")

getProducts()
function subirComentario(evento) {
    evento.preventDefault();
    var comentario = document.getElementById("cajacomentarios").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(comentario))
    let ul = document.getElementById("comentariosul")
    ul.appendChild(li)
    document.getElementById("cajacomentarios").value = "";
}


async function getProducts(){
    let products = [];
    fetch("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products").then((response)=>{
        response.json().then((productsJson)=>{
            createElement(productsJson)
        })
    });
}
async function createElement(products){
    
    products.forEach(element => {
        let types = element.notebooksTypes
        let productCard = document.createElement("div")
        productCard.setAttribute('class', 'col-xl-4 col-lg-6 col-md-6 col-sm-12 p-4 h-100')
        let productTitle =  document.createElement("h4")
        productTitle.textContent = element.title
        let link = document.createElement("a")
        link.href = "https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/" + element.id
        link.target = "_blank"
        link.appendChild(productTitle)
        let productImage =  document.createElement("img");
        productImage.src = element.image_url 
        productImage.alt = element.title
        let productDescription = document.createElement("p")
        productDescription.textContent = element.description
        productCard.appendChild(link)
        productCard.appendChild(productImage)
        productCard.appendChild(productDescription)
        types.forEach(type =>{
            let productVariant = document.createElement("P")
            let productPrice = document.createElement("p")
            let productRam = document.createElement("strong")
            productRam.textContent = type.ramAmount + " "
            productPrice.textContent = "$ " + type.price
            productVariant.appendChild(productRam)
            productVariant.appendChild(productPrice)
            productCard.appendChild(productVariant)
        })
        addElements(productCard)
    });
}
async function addElements(productCard){
    let productsContainer = document.getElementById("productsContainer")
    productsContainer.appendChild(productCard)
}