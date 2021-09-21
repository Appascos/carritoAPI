const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    nuevaSeleccion: async (req,res,next) => {
        await db.Seleccion.create({
            trasladoDiaFeriado: req.body.traslado,
            cajas: req.body.cajas,
            gomaEspuma: req.body.espuma,
            depositoTemporario : req.body.depoT,
            embalaje : req.body.embalaje,
            adhesivo : req.body.cintas,
            depositoPermanente: req.body.depoP,
            asistente:req.body.asistente
        })
        next();
    }
}

