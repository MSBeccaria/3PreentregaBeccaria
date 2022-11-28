const products =[
{  
    id:1,
    name: "CITY TOUR",
    description: "Un tradicional paseo por el centro de Lobos conociendo su historia, su gente. Un recorrido por los principales sitios.",
    day: "Domingo",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/citytour.jpg",
},
{  
    id:2,
    name: "PLAZAS",
    description: "Un recorrido por las plazas de Lobos para disfrutar de la naturaleza y de la historia. Finaliza con una merienda.",
    day: "Sábado",
    time: "Tarde",
    price: 700,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/plazas.jpg",
},
{  
    id:3,
    name: "IGLESIAS",
    description: "Conocé las iglesias de la ciudad y maravillate con su arquitectura e historia.",
    day: "Sábado",
    time: "Tarde",
    price: 500,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/iglesias.jpg",
},
{  
    id:4,
    name: "CEMENTERIO",
    description: "Visita guiada por el cementerio local conociendo nuestra historia y antepasados.",
    day: "Domingo",
    time: "Mañana",
    price: 400,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/cementerio.jpg",
},
{  
    id:5,
    name: "MUSEOS",
    description: "Un recorrido por los museos de Lobos: Museo de Perón, Museo Tradicionalista y Museo de historia local.",
    day: "Domingo",
    time: "Mañana",
    price: 600,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/peron.jpg",
},
{  
    id:6,
    name: "BODEGONES",
    description: "Un recorrido por los bodegones del pueblo para disfrutar de la gastronomía local.",
    day: "Domingo",
    time: "Mañana",
    price: 1000,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/bodegones.jpg",
},
{  
    id:7,
    name: "CITY TOUR NOCTURNO",
    description: " Conocé nuestra ciudad de noche. La salida incluye consumiciones en los bares más concurridos.",
    day: "Sábado",
    time: "Noche",
    price: 1000,
    group: "Grupal",
    category: "Ciudad",
    img: "./assets/tournocturno.jpg",
},
{  
    id:8,
    name: "ALMUERZO CAMPERO",
    description: "Te ivitamos a un almuerzo campero que se extiende hasta los mates de la tarde. Show en vivo folklórico.",
    day: "Domingo",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "./assets/asado.jpg",
},
{  
    id:9,
    name: "DIA DE CAMPO",
    description: "Disfrutá de un día de campo en la Estancia La Candelaria. Actividades y comidas incluídas.",
    day: "Sábado",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "./assets/estancia.jpg",
},
{  
    id:10,
    name: "ASTROTURISMO",
    description: "Te invitamos a conocer el cielo de Lobos y a sorprenderte a través de la lente de un súper telescopio.",
    day: "Sábado",
    time: "Noche",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "./assets/astroturismo.jpg",
},
{  
    id:11,
    name: "BICITURISMO",
    description: "Si sos fan de la bici, esta salida es para vos. Tour por Lobos y caminos rurales. Paradas en sitios históricos.",
    day: "Sábado",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "./assets/bici.jpg",
},
{  
    id:12,
    name: "CAMINATA SILVESTRE",
    description: "Vamos a disfrutar de la naturaleza con una caminata de observación de aves y revalorización de plantas nativas.",
    day: "Domingo",
    time: "Mañana",
    price: 500,
    group: "Grupal",
    category: "Naturaleza",
    img: "./assets/plantas.jpg",
},
{  
    id:13,
    name: "SALTO DE BAUTISMO",
    description: "Animate a vivir una experiencia única! Realizá un salto con paracaídas de la mano de un instructor profesional.",
    day: "Domingo",
    time: "Mañana",
    price: 5000,
    group: "Individual",
    category: "Naturaleza",
    img: "./assets/salto.jpg",
},
{  
    id:14,
    name: "VUELO BAUTISMO",
    description: "Te llevamos a sobrevolar Lobos y sus alrededores en un vuelo en avión de pequeño porte. ",
    day: "Sábado",
    time: "Tarde",
    price: 5000,
    group: "Individual",
    category: "Naturaleza",
    img: "./assets/vuelo.jpg",
},
{  
    id:15,
    name: "TRAVESIA EN KAYAK",
    description: "Travesía por el Arroyo Las Garzas para disfrutar del deporte y la naturaleza a pleno.",
    day: "Sábado",
    time: "Mañana",
    price: 3000,
    group: "Individual",
    category: "Naturaleza",
    img: "./assets/kayak.jpg",
},
]


let cart = JSON.parse(localStorage.getItem('lista'))?.length > 0 ? JSON.parse(localStorage.getItem('lista')): []
JSON.parse(localStorage.getItem('lista'))?.length > 0 ? JSON.parse(localStorage.getItem('lista')): localStorage.setItem('lista', JSON.stringify(cart))

let filtrados = JSON.parse(localStorage.getItem('filtrado'))?.length > 0 ? JSON.parse(localStorage.getItem('filtrado')): []
JSON.parse(localStorage.getItem('filtrado'))?.length > 0 ? JSON.parse(localStorage.getItem('filtrado')): localStorage.setItem('filtrado', JSON.stringify(filtrados))

let page = localStorage.getItem('page')?.length > 0 ? localStorage.getItem('page'): 'home'
localStorage.getItem('page')?.length > 0 ? localStorage.getItem('page'): localStorage.setItem('page', (page))


//Div Botones
const divButton = document.createElement('div')
document.body.append(divButton)
divButton.setAttribute('class', 'divHeader')

//Boton Productos
const allP = document.createElement("button")
allP.innerText = 'Productos'
allP.setAttribute('class', 'btn')
allP.setAttribute('onclick', 'btnProducts()')
divButton.append(allP)

//Boton Carrito
const cartP = document.createElement("button")
cartP.innerText = 'Carrito'
cartP.setAttribute('class', 'btn')
cartP.setAttribute('onclick', 'cartProducts()')
divButton.append(cartP)

//Boton Ciudad
const ciudad = document.createElement("button")
ciudad.innerText = 'Ciudad'
ciudad.setAttribute('class', 'btn')
ciudad.setAttribute('onclick', 'selectCategory("Ciudad")')
divButton.append(ciudad)

//Boton Naturaleza
const naturaleza = document.createElement("button")
naturaleza.innerText = 'Naturaleza'
naturaleza.setAttribute('class', 'btn')
naturaleza.setAttribute('onclick', 'selectCategory("Naturaleza")')
divButton.append(naturaleza)

//Boton Grupal
const grupal = document.createElement("button")
grupal.innerText = 'Grupal'
grupal.setAttribute('class', 'btn')
grupal.setAttribute('onclick', 'selectGroup("Grupal")')
divButton.append(grupal)

//Boton Individual
const individual = document.createElement("button")
individual.innerText = 'Individual'
individual.setAttribute('class', 'btn')
individual.setAttribute('onclick', 'selectGroup("Individual")')
divButton.append(individual)

//Boton Sabado
const sabado = document.createElement("button")
sabado.innerText ='Sábado'
sabado.setAttribute('class', 'btn')
sabado.setAttribute('onclick', 'selectDay("Sábado")')
divButton.append(sabado)

//Boton Domingo
const domingo = document.createElement("button")
domingo.innerText ='Domingo'
domingo.setAttribute('class', 'btn')
domingo.setAttribute('onclick', 'selectDay("Domingo")')
divButton.append(domingo)

//input Busqueda
const input = document.createElement("input")
input.innerText ='Buscar'
input.setAttribute('class', 'input')
input.setAttribute('id', 'buscador')
input.setAttribute ('name', 'buscador')
input.setAttribute('placeholder', 'Tu busqueda')
divButton.append(input)
input.addEventListener('input', searchProduct)



//Div body
const divBody = document.createElement('div')
document.body.append(divBody)
divBody.setAttribute('class', 'demo')//Recibe 2 párametros, que van en String 1) el atributo 2)el nombre del atributo

//Lista
let ul = document.createElement('ul')
divBody.append(ul)


//Todos los productos
function allProducts(listaDeProductos){
    ul.remove();
    ul = document.createElement('ul')
    divBody.appendChild(ul)
    for (const product of listaDeProductos) {
        let li = document.createElement('li')
        li.innerHTML = 
        `<h3>${product.name}<h3/>
         <img src="${product.img}" alt="${product.name}" />
         <p>${product.description}<p>
         <h4>Día de la salida: ${product.day}
         <button id=${product.id} class="button" onclick=agregar(${product.id}) >Agregar</button>
         <p>Precio $${product.price}</P>`
        ul.append(li)
        li.setAttribute('id', `${product.id}`)
        li.setAttribute('class', 'class=card')
    }
}


function agregar(id){
    //localStorage.getItem("lista") ? cart = JSON.parse(localStorage.getItem("lista")) : cart []

    const existe = cart.some(product => product.id === id)
    if (existe){
        alert('El producto ya fue agregado al carrito')
    } else {
        const productBuy = products.find(product => product.id === id)
        cart.push(productBuy)
        localStorage.setItem("lista", JSON.stringify(cart))
        //console.log(productBuy);
    }
}


//Productos del carrito
function cartProducts(){
    ul.remove();
    ul = document.createElement('ul')
    divBody.appendChild(ul)
    for (const product of cart) {
        let li = document.createElement('li')
        li.innerHTML = 
        `<h3>${product.name}<h3/>
         <img src="${product.img}" alt="${product.name}" />
         <p>${product.description}<p>
         <button id=${product.id} class="button" onclick=quitar(${product.id}) >Quitar</button>
         <p>Precio $${product.price}</P>`
        ul.append(li)
        li.setAttribute('id', `${product.id}`)
        li.setAttribute('class', 'class=card')
    }
    localStorage.setItem('page', "carrito")
}

function quitar(id){
    cart = cart.filter(product => product.id !== id)
    localStorage.setItem("lista", JSON.stringify(cart))
    cartProducts()
        
}

function selectCategory(category){
    filtrados = products.filter(product => product.category === category)
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'cat')
}

function selectGroup(group){
    filtrados = products.filter(product => product.group === group)
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'group')
}

function selectDay(day){
    filtrados = products.filter(product => product.day === day)
    localStorage.setItem('filtrado', JSON.stringify(filtrados))
    allProducts(filtrados)
    localStorage.setItem('page', 'day')
}

function searchProduct(){
    const productBySearch = products.filter(product => product.name.toLowerCase().includes(input.value))
    allProducts(productBySearch)
}

function btnProducts(){
    allProducts(products)
    localStorage.setItem('page', 'home')
}


if (page == 'home') allProducts(products)
if (page == 'carrito') cartProducts()
if (page == 'day') allProducts(filtrados)
if (page == 'cat') allProducts(filtrados)
if (page == 'group') allProducts(filtrados)