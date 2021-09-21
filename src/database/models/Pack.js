// alias, cols, config

function packData(sequelize, DataTypes) {

    alias = 'Pack';
    cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,

        },

        numeroPack: { type: DataTypes.INTEGER(100) },

        radio: { type: DataTypes.DECIMAL },

        imagen: { type: DataTypes.STRING(20) },

        superficie: { type: DataTypes.INTEGER(4) },

        precio: { type: DataTypes.DECIMAL },

    };

    config = {
        camelCase: true,
        timestamps: false,
        tableName: 'pack'
    };

    const pack = sequelize.define(alias, cols, config);

    pack.associate = (models) => {

        pack.hasMany(models.Servicio_adicional, {
            as: 'servicio_adicional',
            foreignKey: 'pack_id'

        })

    }

    return pack;

}

module.exports = packData;
