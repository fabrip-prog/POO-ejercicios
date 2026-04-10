class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;

    }
    mostrarInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h`;
    }
    acelerar() {
        this.velocidad += 100;
    }
}
const auto1 = new Auto("Ford", "Fiesta");
const auto2 = new Auto("Toyota", "Corolla");
