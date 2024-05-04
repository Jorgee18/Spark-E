"use strict";
const regionesComunasController = require("../controllers/regionesComunasController");
const regionesComunas = (express) => {
    const router = express.Router();
    router.get('/', regionesComunasController.getRegiones);
    router.post('/:cod_region', regionesComunasController.getComunasByCod);
    return router;
};
module.exports = regionesComunas;
