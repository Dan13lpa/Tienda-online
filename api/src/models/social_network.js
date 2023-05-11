module.exports = function(sequelize, DataTypes) {
    const Social_network = sequelize.define('Social_network', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre".'
                }
            }
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Url".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'social_networks',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            }
        ]
    });


    Social_network.associate = function(models) {
    };

    return Social_network;
};