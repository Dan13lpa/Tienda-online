module.exports = function(sequelize, DataTypes) {
    const Contact = sequelize.define('Contact', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Nombre".'
                }
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Email".'
                }
            }
        },
        subject: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Subject".'
                }
            }
        },
        message: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Por favor, rellena el campo "Message".'
                }
            }
        },
    }, {
        sequelize,
        tableName: 'contacts',
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
            },
            {
                name: "email",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "email" },
                ]
            },
        ]
    });

    Contact.associate = function(models) {
    };

    return Contact;
};