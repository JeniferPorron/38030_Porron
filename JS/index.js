
//Arrays
    const productos = []
    const descripciones = []
    const carrito = []

//Variables
    let descripcion = ""
    let stock = 0
    let importe = 0
    let tipoIVA = ""

//Clase producto
class Producto{
    constructor(id, descripcion, stock, importe, tipoIVA){
        this.id = id;
        this.descripcion = descripcion;
        this.stock = stock;
        this.importe = importe;
        this.tipoIVA = tipoIVA;
    }

    //Calcular importe con IVA
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

// Código
    //Agregar productos al array
    do {
        descripcion = prompt("Indique el nombre del producto:");
        stock = parseInt(prompt("Indique el stock disponible:"));
        importe = parseFloat(prompt("Indique el importe del producto:")).toFixed(2);
        tipoIVA = prompt("Indique el tipo de IVA aplicable: general, reducido, superreducido o ninguno.");

        const nuevoProducto = new Producto(crearID(), descripcion, stock, importe, tipoIVA);
        productos.push(nuevoProducto);
        agregarOtro = confirm("¿Desea agregar otro producto?");

    } while(agregarOtro)

    //Mostrar productos añadidos al array
    for (let i = 0 ; i < productos.length ; i++){
        descripciones.push(productos[i].descripcion);
    }

    alert(descripciones.join(", "))

buscarProductos(productos)

añadirCarrito(productos)


// Funciones
    //Crear ID
    function crearID(){
        return parseInt(Math.random() * 1000000);
    }

    //Busqueda de productos por la descripcion
    function buscarProductos(productos){
        let busqueda = prompt("Indique el nombre del producto que desea buscar:");
            const resultado = productos.filter(producto => producto.descripcion.includes(busqueda));
            //alert("Productos encontrados: " + resultado.join(", "));
            console.log(mostrarBusqueda(resultado));
    }

    function mostrarBusqueda(resultado){
        console.log(resultado);
        let resultado2 = resultadoBusqueda.map(producto => {
            return{
                descripcion: producto.descripcion,
                importe: producto.importe,
            }
        })
        return resultado2
    }