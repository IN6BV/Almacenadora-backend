export function crearCorreo(nombre, apellido) {
    const obtenerInicialNombre = nombre.charAt(0).toLowerCase();
    const apellidoMinusculas = apellido.toLowerCase();
    
    const correo = obtenerInicialNombre + apellidoMinusculas + "@almtesoro.org.gt";
    
    return correo;
}

