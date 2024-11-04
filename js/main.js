/* funciones */

let nombre = prompt("Ingrese su nombre:");

function inicioMenu (nombre) {

    while(true){
    

    let opcionElegida = parseInt(prompt("Hola " + nombre + "! ingrese el numero de opcion que desea realizar: 1. Calcular monto total de la compra a realizar | 2. Calcular tiempo de envio segun localidad | 3. Consultar precio de un producto especifico "))

    
    if((opcionElegida < 1) || (opcionElegida > 3)){
        alert("numero de opcion no valida. Ingrese el numero nuevamente.")}

    else{

    switch(opcionElegida){
        case 1:
            montoTotal();
            break;
        case 2:
            calcularTiempoCompra();
            break;
        case 3: 
            precioItem();
            break;
    }
    }
    }
}

function montoTotal(){

    let sumaTotal=0;
    let precioProductoActual = 0;

    while(precioProductoActual != "fin"){

        precioProductoActual= prompt("Ingrese el valor del producto (para finalizar la suma ingrese la palabra fin):");
        console.log(parseFloat(precioProductoActual))

        if(isNaN(parseFloat(precioProductoActual)) && precioProductoActual != "fin"){
           alert("Ingreso una respuesta no valida. Intentelo nuevamente.")
        }
        else{
            if(precioProductoActual!= "fin"){
            console.log(precioProductoActual)
            sumaTotal+=parseFloat(precioProductoActual)
        }}
    }

    let verificacion = prompt("LA suma total de los productos, da un valor de $" + sumaTotal + ". desea realizar otra operacion de suma de montos? Y/N")

    /* la verificacion, pense en hacerla con una funcion, pero como el if te envia a la misma funcion nuevamente , no encontre la forma de generalizarlo par una funcion*/

    if(verificacion == "Y" || verificacion == "YES" || verificacion == "y" || verificacion == "yes" || verificacion == "si"){
        montoTotal();
    }
    else{
        alert("Volvera al menu inicial.")
    }

}

function calcularTiempoCompra(){

    let localidad = prompt("ingrese a la localidad donde quiere realizar el pedido:");

    /* pense en hacerlo con un switch, pero se hacia largo, ya que necesito tener encuenta las mayusculas y minisculas y se ponia muy largo */ 

    if(localidad == "Buenos Aires" || localidad == "buenos aires"){
        alert("El costo de envio es de $3000")
    }
    else{
        alert("El costo de envio es de $7000")
    }

    let verificacion = prompt("desea realizar otra operacion de calculo de envio? Y/N");
    
    if(verificacion == "Y" || verificacion == "YES" || verificacion == "y" || verificacion == "yes" || verificacion == "si"){
        calcularTiempoCompra();
    }
    else{
        alert("Volvera al menu inicial.")
    }

}

function precioItem(){

    let repetir=false;

    do{
        producto = prompt("Ingrese el nombre exacto en minusculas del producto que quiere averiaguar el precio:");
        repetir=false;
    switch(producto){
        case 'espejo':
            alert("el precio es de : $17000");
        break;

        case 'camino de mesa':
            alert("el precio es de : $9000");
        break;

        case 'porta masetas':
        case 'decoracion de pared':
            alert("el precio es de : $8000");
        break;

        case 'bolso de mano':
            alert("el precio es de : $12000");
        break;
        default:
            alert("Producto inexistente. Intente nuevamente.");
            repetir=true;
            break;
    }
    }while(repetir)
    
    let verificacion = prompt("desea realizar otra consulta de precio? Y/N");
    
    if(verificacion == "Y" || verificacion == "YES" || verificacion == "y" || verificacion == "yes" || verificacion == "si"){
        precioItem();
    }
    else{
        alert("Volvera al menu inicial.")
    }

}


/* Script */

inicioMenu(nombre);