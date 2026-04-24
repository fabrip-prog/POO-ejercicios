class vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }   
    mostrarInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }   
}
class Auto extends vehiculo {
    constructor(marca, modelo, color) {
        super(marca, modelo);
        this.color = color;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Color: ${this.color}`);   
    }
}
class Moto extends vehiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }
    mostrarInfo() {
        super.mostrarInfo();
        console.log(`Tipo: ${this.tipo}`);
    }
}
const auto1 = new Auto("Toyota", "Corolla", "Rojo");
auto1.mostrarInfo();
const moto1 = new Moto("Honda", "CBR600RR", "Deportiva");
moto1.mostrarInfo();