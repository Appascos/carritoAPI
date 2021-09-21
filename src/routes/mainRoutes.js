const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')
//hoy  const productController = require ('../controllers/productController')
//hoy  const usersController = require ('../controllers/usersController')
const path = require('path');
const multer = require('multer'); // Requiero el multer para poder luego subir las imagenes y tratarlas.
const { body } = require('express-validator');

router.get('/', mainController.index);
router.get('/quienesSomos', mainController.quienesSomos);

module.exports = router;