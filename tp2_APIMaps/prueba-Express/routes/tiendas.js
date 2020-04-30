const crudTiendas = (app) => {
    const Tienda = require('../models/tiendas.js');
    
    //Funciones de endpoints
    //GET - Devuelve todas las tiendas;
    findAllTiendas = (req, res) => {
        Tienda.find((err, tiendas) => {
            if (!err) {
                console.log('GET /tiendas');
                res.send(tiendas)
            }
        })
    }
    //URLS
    app.get('/tiendas', findAllTiendas); 
}

module.exports = crudTiendas;

