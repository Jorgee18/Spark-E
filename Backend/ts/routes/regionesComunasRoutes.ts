const regionesComunasController = require("../controllers/regionesComunasController");

const regionesComunas = (express:any) => {
    const router = express.Router();

    router.get('/regiones', regionesComunasController.getListRegiones);

    router.get('/regiones/:cod_region', regionesComunasController.getRegionByCod);
    
    router.get('/regiones/:cod_region/comunas', regionesComunasController.getListComunasByRegion);

    router.get('/comunas/:cod_comuna', regionesComunasController.getComunaByCod);

    return router;
};

module.exports = regionesComunas;