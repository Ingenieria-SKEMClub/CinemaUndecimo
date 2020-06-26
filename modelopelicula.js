const mongoose = require('mongoose'); // Paquete para conexiones a MongoDB
const schema = mongoose.Schema; // Traemos la clase Schema del paquete de Mongoose.

/* Creamos una nueva copia y como parametro, le pasamos un objeto de qué campos
llevará este archivo nuevo y qué tipo de dato acepta. */
const pelicula = new schema({
    NOMBRE: String,
    DURACION: Number,
    CATEGORIA: String,
    LENGUAJE: String,
    HINICIO: Number,
    MINICIO: Number
})

/* Exportamos el modelo, indicandole como primer parametro que es a la colección de "Peliculas" y 
 segundo lle decimos que guarde la instancia de Schema "pelicula" */
module.exports = mongoose.model('Peliculas', pelicula);