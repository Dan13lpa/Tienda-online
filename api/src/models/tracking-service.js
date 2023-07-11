const useBcrypt = require('sequelize-bcrypt');

module.exports = function (sequelize, DataTypes) {
  const Tracking = sequelize.define('Tracking', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    recurso: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    metodo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tracking',
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
        name: 'tracking_ip_index',
        using: 'BTREE',
        fields: [
          { name: 'ip' }
        ]
      }
    ]
  });

  return Tracking;
};
