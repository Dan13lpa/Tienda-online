module.exports = function(sequelize, DataTypes) {
    const Payment_method = sequelize.define('Payment_method', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          name: {
            allowNull: false,
            type: DataTypes.STRING
          },
          visible: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
            tableName: 'payment_methods',
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
    
    
        Payment_method.associate = function(models) {
        };
    
        return Payment_method;
    };