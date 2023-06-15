module.exports = function (sequelize, DataTypes) {
    const Producto = sequelize.define('Producto', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen_url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      categoria_id: {
        type: DataTypes.INTEGER
      },
      visible: {
        type: DataTypes.BOOLEAN
      },
      activo: {
        type: DataTypes.BOOLEAN
      },
    }, {
      sequelize,
      tableName: 'productos',
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
          name: 'producto_productoCategoriaId_fk',
          using: 'BTREE',
          fields: [
            { name: 'productoCategoriaId' }
          ]
        }
      ]
    })
  
    Producto.associate = function (models) {
      Producto.belongsTo(models.ProductoCategoria, { as: 'productosCategoria', foreignKey: 'productosCategoriaId' })
      Producto.hasMany(models.Precio, { as: 'precios', foreignKey: 'productoId' })
    }
  
    return Producto
  }
  