const multer = require('multer');
const path = require('path');

const multerUsersDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {       // request, archivo y callback que almacena archivo en destino
        cb(null, path.join(__dirname, '../public/img/img_users'));    // Ruta donde almacenamos el archivo
    },
    filename: function (req, file, cb) {          // request, archivo y callback que almacena archivo en destino
        let fileName = 'img_user' + '-' + file.originalname;   // milisegundos y extensión de archivo original
        cb(null, fileName);
    }
});
module.exports = multerUsersDiskStorage;