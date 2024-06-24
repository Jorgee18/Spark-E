const express = require('express');
const router = express.Router();
const notificacionesController = require("../controllers/notificacionesController");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', notificacionesController.getNotificaciones);
router.get('/', notificacionesController.getNotificaciones);

module.exports = router;