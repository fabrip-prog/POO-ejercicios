class producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    setPrecio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this.precio = nuevoPrecio;
        } else {
            console.log("El precio no puede ser negativo.");
        }
    }
    getPrecio() {
        return this.precio;
    }
}
const producto1 = new producto("Laptop", 1500);
console.log(producto1.getPrecio());
producto1.setPrecio(1200);
console.log(producto1.getPrecio());