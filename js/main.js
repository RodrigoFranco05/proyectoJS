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


//Creando objetos de prueba

const producto1 = new Producto ("Espejo", 30000);
const producto2 = new Producto ("Vaso", 2000);
const producto3 = new Producto ("Cuchillo", 1500);
const producto4 = new Producto ("Tenedor", 1400);
const producto5 = new Producto ("Plato", 4000);

// Creamos el array con los productos disponibles

let productosDisponibles = [producto1, producto2, producto3, producto4, producto5];

// Creamos el carrito del usuario

let carrito = [];




// ================== Funciones ================== //

let nombre = prompt("Ingrese su nombre:");


function inicioMenu (nombre) {

    while(true){
    

    let opcionElegida = parseInt(prompt("Hola " + nombre + "! ingrese el numero de opcion que desea realizar: 1. Ingresar modo Administrador  | 2. Ingresar modo usuario | 0. Salir"))

    
    if((opcionElegida < 0) || (opcionElegida > 2)){
        alert("numero de opcion no valida. Ingrese el numero nuevamente.")}

    else{

    switch(opcionElegida){
        case 1:
            menuAdministrador(nombre);
            break;
        case 2:
            menuUsuario(nombre);
            break;
        case 0:
            return;
    }

    
    }
    }
}

// Menu Administrador

function menuAdministrador(nombre){

    while(true){
        let opcionElegida = parseInt(prompt("Hola " + nombre + "! ingrese el numero de opcion que desea realizar: 1. Crear un nuevo producto | 2. Modificar un producto | 3. Eliminar un producto | 0. Salir" ))

        if((opcionElegida < 0) || (opcionElegida > 3)){
            alert("numero de opcion no valida. Ingrese el numero nuevamente.")}
    
        else{
            switch(opcionElegida){
                case 1:
                    nuevoProductoStock();
                    break;
                case 2:
                    modificarProductoStock();
                    break;
                case 3:
                    eliminarProductoStock();
                    break;
                case 0:
                    return;
            }
        }
    }

}

// Menu Usuario

function menuUsuario(nombre){

    while(true){
    

        let opcionElegida = parseInt(prompt("Hola " + nombre + "! ingrese el numero de opcion que desea realizar: 1. Ver productos | 2. Agregar productos al carrito | 3. eliminar productos del carrito | 4. Calcular total del carrito | 5. Visualizar carrito | 0. salir"))
    
        
        if((opcionElegida < 0) || (opcionElegida > 5)){
            alert("numero de opcion no valida. Ingrese el numero nuevamente.")}
    
        else{
    
        switch(opcionElegida){
            case 1:
                mostrarProductos();
                break;
            case 2:
                agregarProductosCarrito();
                break;
            case 3: 
                eliminarProductosCarrito();
                break;
            case 4: 
                calcularPrecioCarrito();
                break;
            case 5: 
                visualizarCarrito();
                break;
            case 0: 
                return;
        }
        }
        }
}

// Funciones Menu Administrador

function nuevoProductoStock() {
     
    while(true){
        let nombre = prompt("Ingrese el nombre del nuevo producto:" )
        let precio = parseFloat(prompt("Ingrese el precio del producto:"))
        let descripcion = prompt("Ingrese una descripcion al producto (OPCIONAL):")

        const producto = new Producto (nombre, precio, descripcion);

        productosDisponibles.push(producto);

        let opcion = prompt("Producto creado. Desea crear otro producto? Y/N");

        if (opcion === "N")
            break;
    }

}

function modificarProductoStock() {

    let producto;

    while(true){

    do{
    const nombreProductoModificar= prompt("Ingrese nombre del producto a modificar:")

    producto = productosDisponibles.find( (el) => {return el.nombre.toLowerCase() === nombreProductoModificar.toLowerCase() })

    if(producto.length === 0)
        alert ("El producto no existe")
    else{
        break;
    }
    }while(true)

    const nuevoPrecio = parseFloat (prompt("Ingrese nuevo precio:"))
    const nuevadescripcion =prompt("Ingrese nueva descripcion:")

    producto.precio = nuevoPrecio;
    producto.descripcion= nuevadescripcion;

    let opcion = prompt("Producto Modificado. Desea modificar otro producto? Y/N");

    if (opcion === "N")
        break;
    }   
}

function eliminarProductoStock(){

    let producto;

    while(true){

        do{
        const nombreProductoModificar= prompt("Ingrese nombre del producto a eliminar:")
    
        producto = productosDisponibles.find( (el) => {return el.nombre.toLowerCase() === nombreProductoModificar.toLowerCase() })
    
        if(producto === undefined)
            alert ("El producto no existe")
        else{
            break;
        }
        }while(true)
    
        producto.vendido();         //borrado logico
    
        let opcion = prompt("Producto Eliminado. Desea eliminar otro producto? Y/N");
    
        if (opcion === "N")
            break;
        }  

}

// Funciones Menu Usuario

function mostrarProductos(){
    
    let productosStock = productosDisponibles.filter( (el) => el.stock == true )

    console.log(productosStock);

}

function agregarProductosCarrito(){
    
    let producto;

    while(true){

        do{
        const nombreProductoModificar= prompt("Ingrese nombre del producto a agregar:")
    
        producto = productosDisponibles.find( (el) => {return el.nombre.toLowerCase() === nombreProductoModificar.toLowerCase() })
    
        if(producto === undefined)
            alert ("El producto no existe")
        else{
            break;
        }
        }while(true)
    
        carrito.push(producto);
    
        let opcion = prompt("Producto Agregado. Desea agregar otro producto? Y/N");
    
        if (opcion === "N")
            break;
           
    }
}

function eliminarProductosCarrito(){
    
    while(true){

        do{
        const nombreProductoModificar= prompt("Ingrese nombre del producto a eliminar del carrito:")
    
        const indexProducto = carrito.findIndex((el) => el.nombre.toLowerCase() == nombreProductoModificar);

           
        if (indexProducto !== -1) {
            carrito.splice(indexProducto, 1); // Elimina el objeto en ese índice
        }
        else{
            break;
        }
        }while(true)
    
    
        let opcion = prompt("Producto eliminado. Desea eliminar otro producto? Y/N");
    
        if (opcion === "N")
            break;
           
    }

}

function calcularPrecioCarrito(){

    let total = carrito.reduce( (acc,el) => acc + el.precio, 0)
    total *= 1.21;

    alert("El precio total + IVA es de $" + total + ".")
    
}

function visualizarCarrito(){

    console.log(carrito);
    
}
//Funciones Axuiliares



// ================== Inicializacion de Script ================== //

console.log(productosDisponibles)

inicioMenu(nombre);

console.log(productosDisponibles)