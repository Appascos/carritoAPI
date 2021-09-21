const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require('../controllers/productController');
const APIseleccion = require('../controllers/APIseleccion');
const APIusuario_producto = require('../controllers/APIusuario_producto');


// Middlewares
const multer = require('multer'); // Requiero el multer para poder luego subir las imagenes y tratarlas.



// Tratamiento de Imagenes
const multerDiskStorage = require('../../middlewares/multerDiskStorage');

const uploadFile = multer({ storage: multerDiskStorage });


// router.get('/producto', productController.producto);

// - /products (GET)  Obtener todo el  Listado de productos
router.get('/producto', productController.listado);

// - /products (POST)            —> Acción de creación (almacenamiento de producto luego de creación)
// - /products/create (GET)   —> Formulario de creación de productos
router.get('/cargaProducto', productController.carga);
router.post('/cargaProducto', uploadFile.single('imagenProducto'), productController.store);



// - /products/:id (GET)   —> Detalle de un producto particular
// Se puede utilizar este, falta traer el ID
router.get('/carrito/:id', productController.carrito_ok);
router.get('/carritoConfirm/:id',productController.carrito);

//Ruta de precompra
router.get('/preCompra',productController.preCompra);
router.post('/preCompra', productController.preCompra);


/*** EDITAR PRODUCTO ***/
router.get('/edicionProducto/:id?', productController.edicion);
router.put('/edicionProducto/:id', uploadFile.single('imagenProducto'), productController.actualizar);

// - /products/:id (DELETE)    —> Acción de eliminación de un producto
router.delete('/:id', productController.destroy);

module.exports = router;







