
                                                                               

//  .d88888b  dP     dP  88888888b    8888ba.88ba     a88888b.    dP                       dP       
//  88.        "'  88   .d8'  88                  88  `8b  `   8b   d8'       `88   88                       88       
//  `Y88888b. 88a8P'    a88aaaa        88   88      88   88                88    dP        dP   88d888b. 
//      `     8b   88   `8b.  88                 88   88      88   88                88   88        88    88'       `88 
//  d8'      .8P 88     88  88                  88   88      88   Y8.        .88   88   88.  .    88    88.        .88 
//   Y88888P  dP     dP  88888888P   dP   dP      dP    Y88888P'    dP    `88888P'     88Y8888'  

// Desarrollado por Sebastián André López Corrales 🍣
                                                                              

/* Paquete de express para respuestas del servidor al cliente, como un tren express llevando
y trayendo cosas de un lado a otro :D */
const express = require("express"); 

const app = express(); // Inicializamos express en una variable app.
const puerto = 4000; // Creamos una variable puerto para decirle a express qué puerto debe usar.
const mongoose = require("mongoose"); // Paquete para conectarnos a MongoDB.
mongoose.connect("mongodb://localhost:27017/Cinema"); // Conexión usando el método connect a MongoDB.
const database = mongoose.connection; // Almacenamos el estado de la conexión en una variable.

// Detectamos si en este estado, existió un erro y si lo existe, lo anunciamos por la consola.
database.on('error', console.error.bind(console, "Error conectando a mongo"));

app.use(express.static(__dirname + "/")); // Le decimos a Express que al hacer un get a un html, traiga estáticos.
const bodyParser = require("body-parser"); // Paquete para darle formato a los mensajes HTTP.
app.use(bodyParser.json({limit: '50mb'})) // Instrucción a Express de solo guardar archivos <= a 50mb de peso.
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})) 

// Ruta para, cuando la persona entra a la página sin poner un link extra, le devuelva por un calllback el html.
app.get("/",function(req, res){
    res.sendfile("./index.html"); // Devuelve el index.html al hacer petición get.
});

// Lo mismo de arriba pero si entra a pagina/administrarpelicula.
app.get("/administrarpelicula",function(req, res){
    res.sendfile("./formulariocine.html");
});
require('./routes.js')(app); // Traer todas las rutas especificadas en otro archivo y enviar la instancia de express.
// Método para que la página sepa cuál puerto debe de usar.
app.listen(puerto,function(){
    console.log("Pagina activa"); // Callback que indica que "escuchar el puerto" funcionó.
});
