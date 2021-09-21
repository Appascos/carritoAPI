'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
          type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },
      userAdmin: {type: Sequelize.DataTypes.TINYINT(2)},
      
      nombre: {type: Sequelize.DataTypes.STRING(200)},

      apellido: {type: Sequelize.DataTypes.STRING(200)},

      email: {type: Sequelize.DataTypes.STRING(200)},

      telefono: {type: Sequelize.DataTypes.INTEGER(20)},

      domicilio: {type: Sequelize.DataTypes.STRING(500)},

      localidad: {type: Sequelize.DataTypes.STRING(500)},

      usuario: {type: Sequelize.DataTypes.STRING(200)},

      claveUsuario: {type: Sequelize.DataTypes.STRING(100)},

      imagen: {type: Sequelize.DataTypes.STRING(100)}
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario')
  }
};


