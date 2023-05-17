module.exports = function(sequelize, DataTypes) {
    const SaleError = sequelize.define('SaleError', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          paymentMethodId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Message".'
              }
          }
          },
          customerId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Customer Id".'
              }
          }
          },
          cartId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Cart Id".'
              }
          }
          },
          errorCode: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate: {
              notNull: {
                  msg: 'Por favor, rellena el campo "Error Code".'
              }
          }
          },
          errorMessage: {
            type: DataTypes.STRING,
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
        tableName: 'sale_errors',
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


    SaleError.associate = function(models) {
    };

    return SaleError;
};