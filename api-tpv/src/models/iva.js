module.exports = function (sequelize, DataTypes) {
  const Iva = sequelize.define('Iva', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    vigente: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    multiplier: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
    }
  }, {
    sequelize,
    tableName: 'ivas',
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
      }
    ]
  })

  Iva.associate = function (models) {
    Iva.hasMany(models.Precio, { as: 'precios', foreignKey: 'ivaId' })
  }

  return Iva
}

