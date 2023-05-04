let button = document.getElementById("search")
let productsDiv = document.getElementById("productsContainer")
button.addEventListener("click", getProducts)
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
    let productsContainer = document.getElementById("productsContainer")
    fetch("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products").then((response)=>{
        response.json().then((productsJson)=>{
            products = productsJson
            products.forEach(element => {
                let types = element.notebooksTypes
                let productCard = document.createElement("div")
                productCard.classList.add("productCard");
                let productTitle =  document.createElement("h4")
                productTitle.textContent = element.title
                let link = document.createElement("a")
                link.href = "https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/" + element.id
                link.target = "_blank"
                link.appendChild(productTitle)
                let productImage =  document.createElement("img");
                productImage.src = element.image_url 
                productImage.alt = element.title
                productImage.id = "productImage"
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
                productsContainer.appendChild(productCard)
            });
        })
    });
}