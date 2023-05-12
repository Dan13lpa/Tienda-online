module.exports = function(sequelize, DataTypes) {
    const Locale = sequelize.define('Locale', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          language_alias: {
            allowNull: false,
            type: DataTypes.STRING(2),
          },
          entity: {
            allowNull: false,
            type: DataTypes.STRING(255),
          },
          entity_key: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED,
          },
          key: {
            allowNull: false,
            type: DataTypes.STRING(255),
          },
          value: {
            allowNull: false,
            type: DataTypes.STRING(255),
          },
          createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
          },
          deletedAt: {
            type: DataTypes.DATE,
          },
    }, {
        sequelize,
        tableName: 'locales',
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


    Locale.associate = function(models) {
    };

    return Locale;
};