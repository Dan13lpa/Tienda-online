module.exports = function(sequelize, DataTypes) {
    const Tax = sequelize.define('Tax', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          vatRate: {
            allowNull: false,
            type: DataTypes.STRING
          },
          valid: {
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
            tableName: 'taxes',
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
    
    
        Tax.associate = function(models) {
        };
    
        return Tax;
    };