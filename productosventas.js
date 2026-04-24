class Producto{
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal(){
        return this.precio;
    }
}
class ProductoFisico extends Producto{
    constructor (nombre, precio, envio){
        super(nombre, precio);
        this.envio = envio;
    }
    calcularPrecioFinal(){
        return this.precio + this.envio;
    }
}
class ProductoDigital extends Producto{
    constructor (nombre, precio, descuento){
        super(nombre, precio);
        this.descuento = descuento;
    }
     calcularPrecioFinal(){
        return (this.descuento / 100) * this.precio;
     }
}