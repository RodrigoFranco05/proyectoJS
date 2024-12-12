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
const datosProductosStorage=JSON.parse(datosProductos);

if(datosProductosStorage == null){                 //para la primera vez que se ejecuta en el ordenador

//Creando objetos de prueba

const producto1 = new Producto ("Espejo", 30000);
const producto2 = new Producto ("Vaso", 2000);
const producto3 = new Producto ("Cuchillo", 1500);
const producto4 = new Producto ("Tenedor", 1400);
const producto5 = new Producto ("Plato", 4000);

// Creamos el array con los productos disponibles

productosDisponibles = [producto1, producto2, producto3, producto4, producto5];

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

//Funciones Axuiliares

function renderizarTable(){

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

//inicioMenu(nombre);                           //***Obsoleto , despues se actualizara
