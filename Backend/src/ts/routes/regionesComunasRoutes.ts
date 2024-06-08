const express = require('express');
const router = express.Router();
const regionesComunasController = require("../controllers/regionesComunasController");

router.get('/regiones', regionesComunasController.getListRegiones);

router.get('/regiones/:cod_region', regionesComunasController.getRegionByCod);

router.get('/regiones/:cod_region/comunas', regionesComunasController.getListComunasByRegion);

router.get('/comunas/:cod_comuna', regionesComunasController.getComunaByCod);

module.exports = router;
