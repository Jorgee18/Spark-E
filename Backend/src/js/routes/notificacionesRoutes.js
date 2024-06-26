"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const notificacionesController = require("../controllers/notificacionesController");
const bodyParser = require('body-parser');
const auth = require("../auth");
const jsonParser = bodyParser.json();
router.get('/', notificacionesController.getNotificaciones);
router.get('/:id_notificacion', notificacionesController.getNotificacionesById);
router.post('/crear', jsonParser, notificacionesController.crearNotificacion);
router.delete('/eliminar/:id_notificacion', auth.verifyRole, notificacionesController.eliminarNotificacion);
module.exports = router;
