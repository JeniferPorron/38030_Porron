
//Array productos
const productos = []
const descripciones = []

// Variables
let descripcion = ""
let stock = 0
let importe = 0
let tipoIVA = ""

// Clase producto
class Producto{
    constructor(id, descripcion, stock, importe, tipoIVA){
        this.id = id;
        this.descripcion = descripcion;
        this.stock = stock;
        this.importe = importe;
        this.tipoIVA = tipoIVA;
    }

    // Calcular el importe final
    importeIVA(importe, tipoIVA){
        switch (tipoIVA) {
            case "general":
            return importe * 1.21;

            case "reducido":
                return importe * 1.10;

            case "superreducido":
                return importe * 1.04;

            default:
                return importe * 1;
        }
    }

    mostrarImporte(){
        alert("El importe del producto con impuestos es:" + " " + importeIVA(importe, tipoIVA));
    }

}


do {
    descripcion = prompt("Ingrese el nombre del producto:");
    stock = parseInt(prompt("Indique el stock disponible:"));
    importe = parseFloat(prompt("Ingrese el importe del producto:")).toFixed(2);
    tipoIVA = prompt("Indique el tipo de IVA aplicable: general, reducido, superreducido o ninguno.");

    const nuevoProducto = new Producto(crearID(), descripcion, stock, importe, tipoIVA);
    productos.push(nuevoProducto);
    agregarOtro = confirm("¿Desea agregar otro producto?");

} while(agregarOtro)

// Lista de productos

for (let i = 0 ; i < productos.length ; i++){
    descripciones.push(productos[i].descripcion);
}

alert(descripciones.join(", "))

 // Crear id
    function crearID(){
        return parseInt(Math.random() * 1000000);
    }


