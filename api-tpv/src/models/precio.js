module.exports = function (sequelize, DataTypes) {
    const Precio = sequelize.define('Precio', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      productoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'producto',
          key: 'id'
        }
      },
      ivaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'iva',
          key: 'id'
        }
      },
      precioBase: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true,
      },
      vigente: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      activo: {
        type: DataTypes.TINYINT(1),
        allowNull: true,
      }
    }, {
      sequelize,
      tableName: 'precios',
      timestamps: true,
      paranoid: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'precio_productoId_fk',
          using: 'BTREE',
          fields: [
            { name: 'productoId' }
          ]
        },
        {
          name: 'precio_ivaId_fk',
          using: 'BTREE',
          fields: [
            { name: 'ivaId' }
          ]
        }
      ]
    })
  
    Precio.associate = function (models) {
      Precio.belongsTo(models.Producto, { as: 'producto', foreignKey: 'productoId' }),
      Precio.belongsTo(models.Iva, { as: 'iva', foreignKey: 'ivaId' })
    }
  
    return Precio
  }
  