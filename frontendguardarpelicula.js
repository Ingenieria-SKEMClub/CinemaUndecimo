/* Clase para crear nuevas películas y enviarlas */
class CartaPelicula {
    // Atributos de la película que debemos guardar.
    constructor(Nombre, Duracion, Categoria, Lenguaje, MInicio, HInicio){
        // Usamos this para referirnos a la instancia propiamente no a la clase general.
         this.Nombre = Nombre;
         this.Duracion = Duracion;
         this.Categoria = Categoria;
         this.Lenguaje = Lenguaje;
         this.MInicio = MInicio;
         this.HInicio = HInicio;      
    }
    // Método para guardar que en cada instancia, envia esos datos por HTTP en un POST.
    Guardar(){
        let informacionAEnviar = this;
        // Al ejecutar este método, devuelve una promesa
        return new Promise(function(resolve, reject){ 
            // Bloque try-catch para que detecte errores en el código.
            try{ 
                let xhr = new XMLHttpRequest(); // Instanciamos la clase para crear peticiones HTTP. 

                /* Abrimos una nueva comunicación diciéndole que será con un verbo POST y que deberá de ser
                a la locación donde está un ruta esperando un post, gracias a Express. */
                xhr.open('POST', "http://localhost:4000/api/guardar"); 

                // Le decimos que el formato del mensaje es Json.
                xhr.setRequestHeader('Content-Type', 'application/json'); 
                // Callback para cuando la petición se complete, maneje el resultado
                xhr.onload = function(){ 
                    if(xhr.status === 200){ // Si la petición devuelve un código 200, se ejecutó correctamente.
                        resolve("Se guardo"); // Resuelve la petición.
                    }else{ // Si devuelve cualquier otro código, no se guardo en la base de datos.
                        reject(xhr);
                    }
                }
                xhr.send(JSON.stringify(informacionAEnviar)); // Enviamos como texto la instancia (con los datos);
            }catch(err){
                reject(xhr); // Si hubo un error al hacer la instancia de XMLHttpRequest, atrapa el error y lo rejecta. 
            }
        })
    }
}
 
// Función para guardar. 
function guardarpelicula(){ 
    // Construimos una nueva película con los datos del HTML y usamos el método guardar.
    let peliculaX = new CartaPelicula(
        document.getElementById("nombrepelicula").value,
        document.getElementById("duracion").value,
        document.getElementById("categoria").value,
        document.getElementById("lenguaje").value,
        document.getElementById("minicio").value,
        document.getElementById("hinicio").value
    )
    /* Como guardar es un método que devuelve una promesa, ponemos un callback para mostrar lo que se 
    resolvió o lo que se rechazó, como fuese que sucedió. */
    peliculaX.Guardar().then(function(res){
        alert(res);
    })
}


