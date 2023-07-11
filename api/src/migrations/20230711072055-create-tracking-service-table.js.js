'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tracking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ip: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recurso: {
        allowNull: false,
        type: Sequelize.STRING
      },
      metodo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      codigo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addIndex('tracking', ['ip'], {
      name: 'tracking_ip_index'
    }));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tracking');
  }
};