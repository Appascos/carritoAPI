'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('servicio_adicional', {
      id: {
          type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },

      cajas: {type: Sequelize.DataTypes.DECIMAL(20)},

      gomaEspuma: {type: Sequelize.DataTypes.DECIMAL(20)},

      depositoTemporal: {type: Sequelize.DataTypes.DECIMAL(20)},

      embalaje: {type: Sequelize.DataTypes.DECIMAL(20)},

      adhesivo: {type: Sequelize.DataTypes.DECIMAL(20)},

      depositoPermanente: {type: Sequelize.DataTypes.DECIMAL(20)},

      asistente: {type: Sequelize.DataTypes.DECIMAL(20)},

      trasladoDiaFeriado: {type: Sequelize.DataTypes.DECIMAL(20)},

      pack_id: {
                type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
                references: {
                  model: 'pack',
                  key: 'id'
                }
      },

      fecha_actualizacion: {type: Sequelize.DataTypes.DATE()},

    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('servicio_adicional')
  }
};
