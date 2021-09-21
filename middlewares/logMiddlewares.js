const fs = require('fs');

function logMiddleware(req, res, next) {
    fs.appendFileSync('log.txt', "    ---- Se ingreso a la pagina " + req.url + '---   ')

    next();
}


module.exports = logMiddleware;