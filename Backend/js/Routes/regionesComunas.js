"use strict";
const regionesComunas = (express) => {
    const router = express.Router();
    router.get('/regiones', (req, res) => {
        res.json("Colocar todas las regiones");
    });
    router.post('/comunas/:cod_region', (req, res) => {
        let cod_region = req.params.cod_region;
        res.json(`Se ha recibido el ID ${cod_region} por POST`);
    });
    return router;
};
module.exports = regionesComunas;
