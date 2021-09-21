'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('seleccion', {
      id: {
          type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },

      cajas: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      gomaEspuma: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      depositoTemporario: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      embalaje: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      adhesivo: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      depositoPermanente: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      asistente: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true},

      trasladoDiaFeriado: {type: Sequelize.DataTypes.TINYINT(1),allowNull:true}
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('seleccion')
  }
};

