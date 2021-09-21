const userLoggedMiddleware = require('../../middlewares/userLoggedMiddleware');
const db = require('../database/models');
const Op = db.Sequelize.Op;

module.exports = {

    lista: (req,res) => {

        db.Usuario_producto
            .findAll({include:[{association:'servicio_adicional'}]},{
                order: [
                    ['id','ASC']
                    
                ]
            })
            .then(Usuario_producto => {
                return res.status(200).json ({
                    data: Usuario_producto,
                    total: usuarios.length,
                    status: 200
                })
            })
            .catch(function (e){
                return res.send(e)
            })
    },

    store: async (req,res,next) => {
            
        let datosUsuario = req.session.userLogged;

        let ultimoServicio_adicional =  await

            //para buscar el último precio actualizado del pack

            db.Servicio_adicional
                .findOne({
                    order: [
                        ['fecha_actualizacion','DESC']
                    ]
                    },
                    {
                    where:{
                        pack_id: req.params.id   
                    }
                })
                .then(servicios => {
                    return servicios
                })
                .catch(function (e){
                    return res.send(e)
                })

        let services = await 

            db.Seleccion
                    .findOne({
                        order: [
                            ['id','DESC']
                        ]
                    })
                    .then(seleccion => {
                        return seleccion
                    })
                    .catch(function (e){
                        return res.send(e)
                    })

        let cotiVenta = {
            usuario_id: datosUsuario.id,
            servicio_adicional_id:  ultimoServicio_adicional.id,
            fechaVenta: 0000-00-00,
            vendido:0,
            precioFinal: 1000, // DEBERÍAMOS LOGRAR QUE CARRITO VALUES.JS TRAIGA EL PRECIO FINAL CALCULADO
            seleccion_id: services.id          
        }

        db.Usuario_producto
            .create(cotiVenta)
            .then(cotiVenta => {
                return res.status(200).json({
                    data: cotiVenta,
                    status: 200,
                    estado:'guardado pero no vendido'
                })
            })
            .catch(function (e){
                return res.send(e)
            })

        next();
    },

    actualizar: async (req,res) => {

    
        let ultimaConsulta = await db.Usuario_producto.findOne({include:[{association:'servicio_adicional'}]},{
            order: [
                ['fechaVenta','DESC']
            ]
        },
        {
            where: {
                usuario_id: datosUsuario.id
            } 
            },
            {
            limit: 1
            }
        )

        
        db.Usuario_producto
    
            .update(
                {
                    vendido: 1,
                } 
            )
            .then((resultados) => {res.json({estado:"Cambio a vendido"})})

            .catch(function (e){
                return res.send(e)
            })
    },

    uno: (req,res) => {

        db.Usuario_producto
            .findByPk(req.params.id)
            .then(Usuario_producto => {
                return res.status(200).json ({
                    data: Usuario_producto,
                    status: 200
                })
            })
            .catch(function (e){
                return res.send(e)
            })
    }
}

