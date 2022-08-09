
let precioTotal = parseFloat(prompt("Ingrese el importe del producto:"));
let tipoIVA = prompt("Indique el tipo de IVA aplicable: general, reducido, superreducido o ninguno.");
let precioFinal = mostrarPrecio();

function mostrarPrecio() {
    alert("El precio del producto con impuestos es:" + " " + precioIVA(precioTotal, tipoIVA));
}

function precioIVA(precioTotal, tipoIVA) {
    switch (tipoIVA) {
        case "general":
           return precioTotal * 1.21;

        case "reducido":
            return precioTotal * 1.10;

        case "superreducido":
            return precioTotal * 1.04;

        default:
            return precioTotal * 1;
    }
}



