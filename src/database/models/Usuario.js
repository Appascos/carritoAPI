// alias, cols, config

function usuarioData(sequelize, DataTypes) {

    alias = 'Usuario';
    cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        userAdmin: { type: DataTypes.TINYINT(2) },

        nombre: { type: DataTypes.STRING(200) },

        apellido: { type: DataTypes.STRING(200) },

        email: { type: DataTypes.STRING(200) },

        telefono: { type: DataTypes.INTEGER(20) },

        domicilio: { type: DataTypes.STRING(500) },

        localidad: { type: DataTypes.STRING(500) },

        usuario: { type: DataTypes.STRING(200) },

        claveUsuario: { type: DataTypes.STRING(100) },

        imagen: { type: DataTypes.STRING(100) },

    };

    config = {
        camelCase: true,
        timestamps: false,
        tableName: 'usuario'
    };

    const usuario = sequelize.define(alias, cols, config);

    usuario.associate = (models) => {

        usuario.hasMany(models.Usuario_producto, {
            as: 'usuario_producto',
            foreignKey: 'usuario_id'

        })

    }

    return usuario;

}

module.exports = usuarioData;
