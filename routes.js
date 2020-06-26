const PeliculaBackEnd = require("./backendPelicula.js");

module.exports = (app) => {
    let claseBackEndPelicula = new PeliculaBackEnd();
    app.post("/api/guardar", claseBackEndPelicula.Guardar);
}