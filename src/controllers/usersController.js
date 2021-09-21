const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const usersController = {

    registro: (req, res) => {
        res.render('users/registro');
    },

    procesarRegistro: (req, res) => {
        const errResults = validationResult(req); //errors es un Objeto literal, que tiene una propiedad "errors" que es un array
        const old = req.body

        if (!errResults.isEmpty()) {     //PRIMERO DEBEMOS FIJARNOS SI HAY ERRORES, LUEGO CARGAR
            res.render('users/registro', {
                errors: errResults.mapped(),
                oldData: old
            });
        }
        else {
            db.Usuario.findOne({
                where: {
                    email: req.body.email
                }
            })

                .then(function (userInDB) {

                    if (userInDB) {     //ESTO ES PARA QUE MANDE UN ERROR QUE EL USUARIO ESTÁ REGISTRADO
                        res.render('users/registro', {
                            errors: {
                                email: {
                                    msg: 'Este email ya está registrado'
                                }
                            },
                            oldData: old
                        })
                    }
                    else {
                        db.Usuario.create({
                            userAdmin: 0,
                            nombre: req.body.nombre,
                            apellido: req.body.apellido,
                            email: req.body.email,
                            telefono: req.body.telefono,
                            domicilio: req.body.domicilio,
                            localidad: req.body.localidad,
                            usuario: req.body.usuario,
                            claveUsuario: bcryptjs.hashSync(req.body.claveUsuario, 10),
                            imagen: req.file.filename
                        })
                    }
                })
                .then(function (user) {
                    userToLogin = req.body;
                    userToLogin.imagen = req.file.filename;
                    res.render('users/profileUser', { user: userToLogin })
                })
        }
    },

    login: (req, res) => {
        res.render('users/login');
    },

    loginProcess: (req, res) => {
        db.Usuario.findOne({
            where: {
                usuario: req.body.usuario
            }
        })
            .then(function (userToLogin) {

                if (userToLogin) {
                    let isOkLaClave = bcryptjs.compareSync(req.body.claveUsuario, userToLogin.claveUsuario)

                    if (isOkLaClave) {
                        delete userToLogin.claveUsuario;
                        req.session.userLogged = userToLogin;
                        return res.redirect('profileUser');
                    }

                    return res.render('users/login', {
                        errors: {
                            usuario: {
                                msg: 'Las credenciales son inválidas'
                            }
                        }
                    });
                }

                return res.render('users/login', {
                    errors: {
                        usuario: {
                            msg: 'No se encuentra este usuario'
                        }
                    }
                });
            }
            )
    },

    profile: (req, res) => {
        let infoUser = req.session.userLogged;
        if (infoUser && infoUser.userAdmin == 0) {
            return res.render('users/profileUser', {
                user: req.session.userLogged
            })
        } else {
            return res.render('users/profileAdmin', {
                user: req.session.userLogged
            });
        }
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    },

    profileEdicion: (req, res) => {

        db.Usuario.findByPk(req.params.id)
            .then(function (usuario) {

                res.render('users/registroActualizar', { usuarioEncontrado: usuario })

            })
    },
    // Sin probar, es lo que armo Hernan  -- Verificar!!!!!!

    profileActualizar: async (req, res) => {

        let user = await db.Usuario.findByPk(req.params.id)
            .catch(function (e) {
                return res.send(e)
            })

        let userUpdate = {
            userAdmin: req.body.userAdmin,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            domicilio: req.body.domicilio,
            localidad: req.body.localidad,
            usuario: req.body.usuario,
            claveUsuario: bcryptjs.hashSync(req.body.claveUsuario, 10),
            imagen: user.imagen
        }
        if (req.file) {
            userUpdate.imagen = req.file.filename;
        }
        let userUpdated = await db.Usuario.update(userUpdate, {
            where: {
                id: req.params.id
            }
        }
        )

            .catch(function (e) {
                res.send(e)
            })
        if (user.userAdmin == 0) {

            res.render('users/profileUser', { user });
        }
        res.render('users/profileAdmin', { user })
    },



}



module.exports = usersController;