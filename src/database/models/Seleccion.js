// alias, cols, config

function seleccionData(sequelize, DataTypes) {

    alias = 'Seleccion';
    cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        cajas: { type: DataTypes.TINYINT(1) },

        gomaEspuma: { type: DataTypes.TINYINT(1) },

        depositoTemporario: { type: DataTypes.TINYINT(1) },

        embalaje: { type: DataTypes.TINYINT(1) },

        adhesivo: { type: DataTypes.TINYINT(1) },

        depositoPermanente: { type: DataTypes.TINYINT(1) },

        asistente: { type: DataTypes.TINYINT(1) },

        trasladoDiaFeriado: { type: DataTypes.TINYINT(1) }

    };

    config = {
        camelCase: true,
        timestamps: false,
        tableName: 'seleccion'
    };

    const seleccion = sequelize.define(alias, cols, config);

    seleccion.associate = (models) => {

        seleccion.hasMany(models.Usuario_producto, {
            as: 'usuario_producto',
            foreignKey: 'seleccion_id'

        })

    }

    return seleccion;

}

module.exports = seleccionData;
