const regionesComunasController = require("../controllers/regionesComunasController")

const regionesComunas = (express:any) => {
    const router = express.Router();

    router.get('/', regionesComunasController.getRegiones);

    router.post('/:cod_region', regionesComunasController.getComunasByCod);

    return router;
};

module.exports = regionesComunas;