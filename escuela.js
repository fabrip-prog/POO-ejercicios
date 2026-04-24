class Persona{
    constructor(nombre){
    this.nombre = nombre;
    }
    presentarse(){
        console.log("Hola, mi nombre es ", this.nombre)
    }
}

class Alumno extends Persona{
    constructor (nombre, promedio, año){
        super(nombre);
        this.promedio = promedio;
        this.año = año;
    }
    presentarse(){
        console.log("Hola, mi nombre es ", this.nombre, "soy estudiante de ", this.año, "mi promedio es de: ", this.promedio)
    }
    estudiar(){
        console.log("estudiando...")
    }
}

class Profesor extends Persona{
    constructor (nombre, materia, año){
        super(nombre);
        this.materia = materia;
        this.año = año;
    }
    presentarse(){
        console.log("Hola, mi nombre es ", this.nombre, "soy profesor de ", this.año, "año y doy la materia: ", this.materia)
    }
    enseñar(){
        console.log("enseñando...")
    }
}