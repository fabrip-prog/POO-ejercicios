class Empleado {
    constructor(nombre) {
        this.nombre = nombre;
    }


    calcularSueldo() {
        throw new Error("Debe implementarse en subclases");
    }
}


class EmpleadoFullTime extends Empleado {
    constructor(nombre, salario) {
        super(nombre);
        this.salario = salario;
    }


    calcularSueldo() {
        return this.salario;
    }
}


class EmpleadoPorHora extends Empleado {
    constructor(nombre, horas, valorHora) {
        super(nombre);
        this.horas = horas;
        this.valorHora = valorHora;
    }


    calcularSueldo() {
        return this.horas * this.valorHora;
    }
}
