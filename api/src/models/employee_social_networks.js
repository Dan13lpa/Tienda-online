module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define('EmployeeSocialNetwork', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          employee_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'employees',
              key: 'id',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          },
          social_network_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'social_network',
              key: 'id',
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE'
            }
          },
          account: {
            allowNull: false,
            type: DataTypes.STRING(255)
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
            tableName: 'employees',
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
    
        EmployeeSocialNetwork.associate = function(models) {
            
        };
    
        return EmployeeSocialNetwork;
    };
      