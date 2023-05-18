module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
            name: {
            type: DataTypes.STRING,
            allowNull: false
            },
            position: {
            type: DataTypes.STRING,
            allowNull: false
            },
            company_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'companies',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
            },
            createdAt: {
            type: DataTypes.DATE,
            allowNull: false
            },
            updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
            },
            deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
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
    
        Employee.associate = function(models) {
            
        };
    
        return Employee;
    };