class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}
const auto1 = new Auto("Ford", "Fiesta");
const auto2 = new Auto("Toyota", "Corolla");
