"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regionesComunasController = require("../controllers/regionesComunasController");
const regionesComunas = (express) => {
    const router = express.Router();
    router.get('/regiones', regionesComunasController.getRegiones);
    router.get('/regiones/:cod_region/comunas', regionesComunasController.getComunasByCod);
    return router;
};
module.exports = regionesComunas;
