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