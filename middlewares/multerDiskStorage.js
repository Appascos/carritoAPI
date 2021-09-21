const path = require('path');
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {       // request, archivo y callback que almacena archivo en destino
        cb(null, path.join(__dirname, '../public/img/camiones'));    // Ruta donde almacenamos el archivo
    },
    filename: function (req, file, cb) {          // request, archivo y callback que almacena archivo en destino
        let imageName = 'img' + '-' + file.originalname;   // milisegundos y extensión de archivo original
        cb(null, imageName);
    }
});

module.exports = multerDiskStorage;