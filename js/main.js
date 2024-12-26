// ================== Declaracion de objetos ================== //

// Constructor

class Producto{
    constructor(nombre, precio, descripcion = "Sin descripcion", stock = true) {
            this.nombre= nombre;
            this.precio = precio;
            this.stock = stock;
            this.descripcion = descripcion;
    }
    
    vendido(){
        this.stock = false;
    }
}


let productosDisponibles=[];

const datosProductos= localStorage.getItem("productosDisponibles")
let datosProductosStorage=JSON.parse(datosProductos);

if ((datosProductosStorage == null) || (datosProductosStorage.length == 0)){        //Se utilisa el Local storage mientras haya datos, en caso que se hayan borrado todos los articulos o sea la primera vez que se inicia, hace un fetch al Json(API)
    getProductos()
}else{
    productosDisponibles=datosProductosStorage;
}

// Creamos el carrito del usuario

let carrito = [];

//obtengo elementos del HTML

let tbody= document.getElementById("tbodyProductosDisponibles");

let tbla= document.getElementById("tablaProductos");

let divProd = document.getElementById("articuloPrincipal");

let agregarProductos= document.getElementById("agregarProducto");

// ================== Alertas (Toastify)================== //

const alertaProductoCreado = Toastify({
    text: "Producto agregado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right,rgb(48, 182, 68),rgb(121, 182, 130)",
    },
    onClick: function(){} // Callback after click
  })

const alertaProductoEliminado = Toastify({
    text: "Producto eliminado",
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right,rgb(180, 59, 59),rgb(176, 133, 133))",
    },
    onClick: function(){} // Callback after click
  })


// ================== Funciones ================== //

// let nombre = prompt("Ingrese su nombre:");     //***Obsoleto , despues se actualizara

//Eventos

agregarProductos.addEventListener("click", (e)=> {
    
    agregarProductos.className="ocultar";

    let itemAgregar = document.createElement("div")
    itemAgregar.innerHTML = '<input id="nombre" type="text" placeholder="nombre"> <input id="precio" type="text" placeholder="precio"> <button id="agregarProductoNuevo">Agregar</button>';
    divProd.append(itemAgregar);

    let bottonAgregar= document.getElementById("agregarProductoNuevo")
    let inputNombre=document.getElementById("nombre")
    let inputPrecio=document.getElementById("precio")
    bottonAgregar.addEventListener("click",()=>{
        const productos6= new Producto(inputNombre.value,parseFloat(inputPrecio.value))

        productosDisponibles.push(productos6)

        actualizarLS();
        renderizarTable();
        itemAgregar.remove();

        agregarProductos.className="";
    })
    
})

function getProductos () {
    
    const peticionProductos= fetch("../productos.json");

    peticionProductos.then( (response) => {
        return response.json()
    }).then( (json) => {
        console.log(json)
        datosProductosStorage=json
        productosDisponibles=datosProductosStorage;
        console.log("d")
        actualizarLS()
        renderizarTable()
    })
}

function postProductos(){
    
}

//Funciones Axuiliares

function renderizarTable(){

    console.log(productosDisponibles)
    tbody.innerHTML="";

    let i=0;
    for (const producto of productosDisponibles){


        tbody.innerHTML = tbody.innerHTML + " <tr> <td>" + producto.nombre + "</td> <td>"+ producto.precio +'</td> <td><button> Modificar </button></td> <td><button class="eliminar-btn" data-index='+ i +'> Eliminar </button></td> </tr>'
        i++;

        document.querySelectorAll(".eliminar-btn").forEach((boton) => {
            boton.addEventListener("click", (e) => {
                const index = e.target.getAttribute("data-index"); 
                productosDisponibles.splice(index, 1); 
                actualizarLS();
                renderizarTable(); 
            });
        });
    }


}

function actualizarLS(){
    const productosDisponiblesJSON = JSON.stringify(productosDisponibles)

    localStorage.setItem("productosDisponibles",productosDisponiblesJSON)
}

// ================== Inicializacion de Script ================== //

renderizarTable();

console.log("final")

//inicioMenu(nombre);                           //***Obsoleto , despues se actualizara


