module.exports = function(sequelize, DataTypes) {
    const Client = sequelize.define('Client', {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          first_name: {
            allowNull: false,
            type: DataTypes.STRING
          },
          last_name: {
            allowNull: false,
            type: DataTypes.STRING
          },
          phone_number: {
            allowNull: false,
            type: DataTypes.STRING(10)
          },
          email: {
            allowNull: false,
            type: DataTypes.STRING
          },
          city: {
            allowNull: false,
            type: DataTypes.STRING
          },
          postal_code: {
            allowNull: false,
            type: DataTypes.STRING
          },
          address: {
            allowNull: false,
            type: DataTypes.STRING
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
},{
    sequelize,
    tableName: 'clients',
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


Client.associate = function(models) {
};

return Client;
};