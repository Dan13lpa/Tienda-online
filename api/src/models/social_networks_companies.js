module.exports = function(sequelize, DataTypes) {
    const SocialNetworksCompanies = sequelize.define('SocialNetworksCompanies', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        id_company: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            }
        },
        id_social_network: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'social_networks',
                key: 'id'
            }
        },
        account: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Cuenta".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'social_networks_companies',
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

    SocialNetworksCompanies.associate = function(models) {
        // Relaciones con otras tablas
    };

    return SocialNetworksCompanies;
};
