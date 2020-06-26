let Item = require('./modelopelicula.js'); // Traemos el esquema, plantilla base.


/* Exportamos la clase con los métodos para modificar la base de datos en el BackEnd
para utilizarla en las rutas HTTP que definiremos en routes.js  */
module.exports = class PeliculaBackEnd {
    constructor(){} // Constructor vació, no hay que construir atributos, solo usar los métodos.
    Guardar(req, res){
        /* Usando el Schema ya creado, usamos el método create y le pasamos los datos que vienen en el post
        como primer argumento y como segundo, un callback para cuando se guarde el archivo. */
        Item.create({
            NOMBRE: req.body.Nombre,
            DURACION: req.body.Duracion,
            CATEGORIA: req.body.Categoria,
            LENGUAJE: req.body.Lenguaje,
            HINICIO: req.body.HInicio,
            MINICIO: req.body.MInicio
        }, 
        function(err, item){
            if(err){  // Si error existe, hubo un error y se devuelve el error al cliente.
                res.send(err) 
            }else{ // Si error no existe, se guardo correctamente.
                res.send("Correcto, guardado");
            }
        });
    }
}