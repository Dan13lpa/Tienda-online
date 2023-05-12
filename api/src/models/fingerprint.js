module.exports = function(sequelize, DataTypes) {
    const Fingerprint = sequelize.define('Fingerprint', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          clientId: {
            type: DataTypes.INTEGER
          },
          fingerprint: {
            allowNull: false,
            type: DataTypes.STRING
          },
          createdAt: {
            type: DataTypes.DATE
          },
          updatedAt: {
            type: DataTypes.DATE
          },
          deletedAt: {
            type: DataTypes.DATE
          }
        }, {
            sequelize,
            tableName: 'fingerprints',
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
    
    
        Fingerprint.associate = function(models) {
        };
    
        return Fingerprint;
    };