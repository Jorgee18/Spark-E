"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const notificacionesController = require("../controllers/notificacionesController");
router.get('/', notificacionesController.getNotificaciones);
module.exports = router;
