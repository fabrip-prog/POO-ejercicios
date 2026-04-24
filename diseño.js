class Usuarios{
    constructor(nombre, contraseña){
    this.nombre = nombre;
    this.contraseña = contraseña;
    }
}
class usuariogym extends Usuarios {
    constructor (nombre, contraseña, rutina){
    super(nombre, contraseña);
    this.rutina = rutina;
    }
}
class usuarioIg extends Usuarios {
    constructor (nombre, contraseña, publicaciones){
    super(nombre, contraseña);
    this.publicaciones = publicaciones;
    }
    NewPost (){
        console.log ("agregar nueva publicacion");
    }
}
const usuario1 = new usuarioIg("Fabrizio", "1234", "post1")
usuario1.NewPost();
