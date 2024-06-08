"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const auth = require('../auth');
const usuariosController = require("../controllers/usuariosController");
router.get('/', auth.verifyToken, usuariosController.getUsuarios);
module.exports = router;
