const { body } = require('express-validator');

const validations = [
    body('nombre').notEmpty().withMessage('Ingresa tu nombre'),
    body('apellido').notEmpty().withMessage('Ingresa tu apellido'),
    body('usuario').notEmpty().withMessage('Ingresa un usuario'),
    body('email')
        .notEmpty().withMessage('Ingresa un email').bail()
        .isEmail().withMessage('Ingresa un email válido'),
    body('telefono').notEmpty().withMessage('Ingresa un teléfono válido'),
    body('domicilio').notEmpty().withMessage('Ingresa tu domicilio'),
    body('localidad').notEmpty().withMessage('Ingresa tu localidad'),
    body('claveUsuario')
        .notEmpty().withMessage('Ingresa una contraseña').bail()
        .isLength({ min: 7 }).withMessage("Debe contener 7 caracteres"),
    body('fotoDePerfil').custom((value, { req }) => {
        const file = req.file;
        if (!file) {
            throw new Error('Debes subir una imagen de perfil');
        } else if (!file.mimetype.includes("image")) {
            throw new Error('Subir una imagen valida');
        } else {
            return true
        }
    })
]
module.exports = validations;