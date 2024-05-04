const regionesComunasController = require("../controllers/regionesComunasController");

const regionesComunas = (express:any) => {
    const router = express.Router();

    router.get('/regiones', regionesComunasController.getRegiones);

    router.get('/regiones/:cod_region/comunas', regionesComunasController.getComunasByCod);

    return router;
};

module.exports = regionesComunas;