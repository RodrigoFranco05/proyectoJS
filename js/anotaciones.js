const persona = {
    nombre: nombre,
    apellido: apellido,
}

console.log(persona.nombre);

const persona1 = {
    nombre: prompt("ingrese nombre: "),
    apellido: prompt("ingrese apellido: "),
}

console.log(persona1.nombre); 
console.log(persona1[apellido]);

//setear info

persona.nombre="rodrigo";
console.log(persona.nombre);

persona1.edad=25; //Si no existe, la agrega


//Constructores

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido=apellido;
    this.edad=edad;

    this.calcularEdad = () => this.edad *3;

    this.imprimirNombre = () => {
        console.log("El nombre es: "+ this.nombre);
    }
}

const persona2 = new Persona("pepe","Diaz",30);

console.log(persona2); 
console.log("nombre" in persona1);

for (const propiedad in persona1){
    console.log(propiedad);
}

// Clases

class Producto {
    constructor (nombre,precio,venidido = false){
        this.nombre=nombre;
        this.precio=precio;
        this.vendido=vendido;
    }

    calcularIva() {
        return this.precio * 0.21;
    }

    imprimirNombre() {
        console.log("El nombre del producto es: "+ this.nombre);
    }

    vender() {
        this.vendido=true;
    }
}


for (const pais of paises){
    console.log("");
}


//-----------------------------------------------------------------

let seccionPrincipal = document.getElementById("seccionPrincipal");

let divPrincipal = document.getElementsByClassName("divProductos");

let articuloPrincipal = document.getElementsByTagName("article");

let h1 = document.getElementsByTagName("h1");

let h2 = document.getElementsByTagName("h2");

//query selector


h1.innerHTML = "Bienvenido a mi projecto de JS";

//modo oscuro 

container.className = "container modoOscuro"


//crear elementos

let item = document.createElement("div")
item.innerHTML = "<h3>PRODUCTO " + i +" <h3>";

articuloPrincipal.append(item);

// obteern datos iputs

document.getElementsByTagName("input").value = "ingrese datos";

let input = document.getElementsByTagName("input").value;

input.addEventListener("click",funcion); //input summit, (e) => { e.preventDefault(); const parametro = document.querySelector('input[name="parametro1"]'); valor= parametro.value;}


/* 
modo noche
validar que no se agegen productos dobles
realizar vista de usuario
mejorar front
cambiar de usuario a admin con un boton
confirmar eliminacion
modificar producto
incluir descripciones

filtrar productos
calcular total del carrito
limpar carrito

ingrsar nombre y datos?

reiniciar sistema (borrar datos de localstorage y eliminar tablas con datos)

tranformas de objetos a productos con metdos


uso de los operadores para un optimizacion

*/




//codigo viejo con menu en promp (probablemete reutilizable)

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


    renderizarTable();
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

    renderizarTable();
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


        renderizarTable();
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
