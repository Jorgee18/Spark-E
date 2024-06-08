"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const usuariosController = require("../controllers/usuariosController");
router.get('/', usuariosController.getUsuarios);
module.exports = router;
