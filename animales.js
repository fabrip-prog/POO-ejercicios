class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }


    hacerSonido() {
        console.log("Sonido genérico");
    }
}


class Perro extends Animal {
    ladrar() {
        console.log("Guau");
    }
}

class Gato extends Animal {
    maullar() {
        console.log("Miau");
    }  
}

const p = new Perro("Firulais");
p.hacerSonido();
p.ladrar();   
const g = new Gato("Tom");   
g.hacerSonido();
g.maullar();