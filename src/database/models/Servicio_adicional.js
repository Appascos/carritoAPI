// alias, cols, config

function servicio_adicionalData(sequelize, DataTypes) {

    alias = 'Servicio_adicional';
    cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        trasladoDiaFeriado: { type: DataTypes.DECIMAL(20) },

        asistente: { type: DataTypes.DECIMAL(20) },

        embalaje: { type: DataTypes.DECIMAL(20) },

        cajas: { type: DataTypes.DECIMAL(20) },

        adhesivo: { type: DataTypes.DECIMAL(20) },

        gomaEspuma: { type: DataTypes.DECIMAL(20) },

        depositoTemporal: { type: DataTypes.DECIMAL(20) },

        depositoPermanente: { type: DataTypes.DECIMAL(20) },

        pack_id: { type: DataTypes.INTEGER(11).UNSIGNED },

        fecha_actualizacion: { type: DataTypes.DATE() },

    };

    config = {
        underscore: true,
        camelCase: true,
        timestamps: false,
        tableName: 'servicio_adicional'
    };

    const servicio_adicional = sequelize.define(alias, cols, config);

    servicio_adicional.associate = (models) => {

        servicio_adicional.hasMany(models.Usuario_producto, {
            as: 'usuario_producto',
            foreignKey: 'servicio_adicional_id'

        }),

            servicio_adicional.belongsTo(models.Pack, {
                as: 'pack',
                foreignKey: 'pack_id'

            })
    }

    return servicio_adicional;

}

module.exports = servicio_adicionalData;
