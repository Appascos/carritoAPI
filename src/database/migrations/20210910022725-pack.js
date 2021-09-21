'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('pack', {
      id: {
          type: Sequelize.DataTypes.INTEGER(11).UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },
      
      numeroPack: {type: Sequelize.DataTypes.INTEGER(100)},

      radio: {type: Sequelize.DataTypes.DECIMAL},

      imagen: {type: Sequelize.DataTypes.STRING(20)},

      superficie: {type: Sequelize.DataTypes.INTEGER(4)},

      precio: {type: Sequelize.DataTypes.DECIMAL},
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pack')
  }
};
