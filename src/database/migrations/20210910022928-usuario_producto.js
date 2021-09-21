'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_producto', {
      id: {
          type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },
      usuario_id: {
                  type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                  references: {
                    model: 'usuario',
                    key: 'id'
                  }
      },

      servicio_adicional_id: {
                              type: Sequelize.DataTypes.INTEGER(10).UNSIGNED,
                              references: {
                                model: 'servicio_adicional',
                                key: 'id'
                              }
      },

      fechaVenta: {type: Sequelize.DataTypes.DATE(),allowNull:true,},

      vendido: {type: Sequelize.DataTypes.TINYINT(2),allowNull:true},

      precioFinal: {type: Sequelize.DataTypes.DECIMAL(20),allowNull:true},

      seleccion_id: {
                    type: Sequelize.DataTypes.INTEGER(5).UNSIGNED,
                    references: {
                      model: 'seleccion',
                      key: 'id'
                    }
      },

    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_producto')
  }
};
