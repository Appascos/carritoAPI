// alias, cols, config

function usuario_productoData(sequelize, DataTypes) {

    alias = 'Usuario_producto';
    cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        usuario_id: { type: DataTypes.INTEGER(10).UNSIGNED, allowNull: false },

        servicio_adicional_id: { type: DataTypes.INTEGER(10).UNSIGNED, allowNull: false },

        fechaVenta: { type: DataTypes.DATE() },

        vendido: { type: DataTypes.TINYINT(2) },

        precioFinal: { type: DataTypes.DECIMAL(20) },

        seleccion_id: { type: DataTypes.INTEGER(5).UNSIGNED, allowNull: false },


    };

    config = {
        underscore: true,
        camelCase: true,
        timestamps: false,
        tableName: 'usuario_producto'
    };

    const usuario_producto = sequelize.define(alias, cols, config);

    usuario_producto.associate = (models) => {

        usuario_producto.belongsTo(models.Usuario, {
            as: 'usuario',
            foreignKey: 'usuario_id'

        }),

            usuario_producto.belongsTo(models.Seleccion, {
                as: 'seleccion',
                foreignKey: 'seleccion_id'

            }),

            usuario_producto.belongsTo(models.Servicio_adicional, {
                as: 'servicio_adicional',
                foreignKey: 'servicio_adicional_id',

            })

    }

    return usuario_producto;

}

module.exports = usuario_productoData;
