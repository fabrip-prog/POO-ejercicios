class usuario {
    #contraseña;
    constructor(nombre, contraseña) {
        this.nombre = nombre;
        this.#contraseña = contraseña;
    }
    validarPassword(pass) {
        if (this.#contraseña == pass)  {
            return console.log("Contraseña correcta");
        } else {
            return console.log("Contraseña incorrecta. Intente nuevamente.");
        }
    }
    cambiarPassword(nueva) {
       if (nueva.length >= 5) {
            console.log ("Contraseña cambiada exitosamente."); 
            this.#contraseña = nueva;
        } else {
            return console.log("La contraseña debe tener al menos 5 caracteres.");
        }
    }
}
const usuario1 = new usuario("Fabrizio", "12345");

usuario1.validarPassword("12345");

usuario1.validarPassword("54321");
usuario1.cambiarPassword("54321");
usuario1.validarPassword("54321");
