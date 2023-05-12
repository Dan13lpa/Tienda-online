module.exports = function(sequelize, DataTypes) {
    const Product_category = sequelize.define('Product_category', {
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
            tableName: 'product_categories',
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
    
    
        Product_category.associate = function(models) {
        };
    
        return Product_category;
    };