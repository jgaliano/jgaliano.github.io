// import {stockHerramientas} from "/js/stock_herramientas.js"
let stockHerramientas = [
    {id: 1, nombre: "Carreta", tipo: "THHN", color: "Anaranjado", calibre: 12, cantidad: 1, precio: 15, img: '../Responsive/media/phone1.jpg'},
    {id: 2, nombre: "Faro", tipo: "THHN", color: "Cafe", calibre: 11, cantidad: 1, precio: 20, img: '../Responsive/media/phone2.jpg'},
    {id: 3, nombre: "Compresor", tipo: "THHN", color: "Rojo", calibre: 10, cantidad: 1, precio: 26, img: '../Responsive/media/phone3.jpg'},
    {id: 4, nombre: "Contador", tipo: "THHN", color: "Azul", calibre: 9, cantidad: 1, precio: 30, img: '../Responsive/media/phone4.jpg'},
    {id: 5, nombre: "Cables", tipo: "THHN", color: "Negro", calibre: 8, cantidad: 1, precio: 35, img: '../Responsive/media/phone3.jpg'}
];

let cProductos = document.querySelector('.contenedorProductos');
//Carrito
const carrito = document.querySelector('#ver-carrito')
let carritoConpras = [];// Inicializamod el carrito vacío
const cabeceraCarrito = document.querySelector("#cabezera-carrito");
const contadorCarrito = document.querySelector("#contador-carrito");
const precioTotalCarrito = document.querySelector("#precio-total-carrito");


// Almacenar información en el localstorage
document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carritoConpras')){
        carritoConpras = JSON.parse(localStorage.getItem('carritoConpras'));
        actulaizarCarritoCompras();
    }
})

stockHerramientas.forEach((producto) => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    <img src=${producto.img}>
    <h2>${producto.nombre + " " + producto.tipo + " " + producto.calibre}</h2>
    <p><strong>Precio: </strong>Q. ${producto.precio}</p>
    <p><strong>Color: </strong> ${producto.color}</p>
    <button id="agregarcarrito${producto.id}" class="btn-agregar"><ion-icon name="add-outline" class="icon"></ion-icon></button>
    `

    cProductos.appendChild(div);
    //capturar los datos mediane el boton
    const boton = document.getElementById(`agregarcarrito${producto.id}`);
    boton.addEventListener('click', () => {
        agregaralcarrito(producto.id);
    })
})

const agregaralcarrito =(IdProducto) => {
    // comprobar si el elemento ya existe en el carrito
    const existeProducto = carritoConpras.some (prod => prod.id === IdProducto);

    if(existeProducto){
        const prod = carritoConpras.map(prod =>{
            if(prod.id === IdProducto){
                prod.cantidad++;
            }
        })
    }
    else{
        const item = stockHerramientas.find((prod) => prod.id === IdProducto);
        carritoConpras.push(item);
        console.log(carritoConpras)
    }
    actulaizarCarritoCompras();
}

const actulaizarCarritoCompras = () => {

    carrito.innerHTML = "";
    cabeceraCarrito.innerHTML = "";

    //Inicicio cavecera carrito
    const cabecera = document.createElement("div");
    cabecera.classList.add('cabeceraCarrito')
    cabecera.innerHTML = `
    <p>Carrito de compras</p>
    <button onclick = "cerrarCarrito()" class="btn-cerrar"></button>
    `
    cabeceraCarrito.appendChild(cabecera)
    //Fin cabecera carrito

    // Inicio contador carr-ito
    const contCarrito = document.createElement('div');
    contCarrito.innerHTML = `
    <p>0</p>
    `
    contadorCarrito.appendChild(contCarrito)
    // FIn contador carrito

    //Inicio precio total carrito
    const total = document.createElement('div');
    total.innerHTML = `
    <p>0</p>
    `
    precioTotalCarrito.appendChild(total)
    // Fin precio total carrito


    carritoConpras.forEach((prod) => {
        const div = document.createElement('div');
        div.classList.add("detalles-carrito");
        div.innerHTML = `
        <p class="shop">${prod.nombre + " " + prod.tipo + " " + prod.calibre + " " + prod.color}</p>
        <p class="shop">Precio: ${prod.precio}</p>
        <p class="shop">Cantidad: ${prod.cantidad}</p>
        <button onclick ="eliminardelcarrito(${prod.id})" class="btn-eliminar">Eliminar</button>
        `
        carrito.appendChild(div);

        localStorage.setItem('carritoConpras', JSON.stringify(carritoConpras));
})
    contadorCarrito.innerText = carritoConpras.length;
    let x = contadorCarrito;
    precioTotalCarrito.innerHTML = carritoConpras.reduce((subtotal, prod) => subtotal + prod.precio *  prod.cantidad, 0)
}

const eliminardelcarrito = (IdProducto) => {
    const elemento = carritoConpras .find((prod) => prod.id === IdProducto);
    const indice = carritoConpras.indexOf(elemento);
    carritoConpras.splice(indice, 1);
    actulaizarCarritoCompras();
}

const cerrarCarrito = () => {
    const cerrar = document.querySelector('#contenedorVerCarrito');
    cerrar.classList.add("ocultarCarrito");
}

const abrirCarrito = () => {
    location.reload()
}

