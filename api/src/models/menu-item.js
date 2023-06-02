module.exports = function(sequelize, DataTypes) {
    const MenuItem = sequelize.define('MenuItem', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        menuId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Menu',
                key: 'id',
              }
        },
        localeSeoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'LocaleSeo',
                key: 'id',
              }
        },
        localeSlugSeoId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'LocaleSlugSeo',
                key: 'id',
              }
        },
        parentId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Parent',
                key: 'id',
              }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        customUrl: {
            type: DataTypes.STRING
        },
        private: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        order: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'menu_items',
        timestamps: true,
        paranoid: true,
        indexes: []
    });

    MenuItem.associate = function(models) {
        // Define las asociaciones con otros modelos aquí
    };

    return MenuItem;
};
