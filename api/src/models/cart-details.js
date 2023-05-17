module.exports = function(sequelize, DataTypes) {
    const CartDetail = sequelize.define('CartDetail', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cartId: {
            type: DataTypes.INTEGER
        },
        productId: {
            type: DataTypes.INTEGER
        },
        productName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Product Name".'
                }
            }
        },
        basePrice: {
            allowNull: false,
            type: DataTypes.DECIMAL(6,2),
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Base Price".'
                }
            }
        },
        taxPrice: {
            type: DataTypes.DECIMAL(6,2),
        },
        unitOfMeasurement: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Unit of Measurement".'
                }
            }
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Quantity".'
                }
            }
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        tableName: 'cart_details',
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


    CartDetail.associate = function(models) {
    };

    return CartDetail;
};