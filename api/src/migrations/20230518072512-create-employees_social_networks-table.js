'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees_social_networks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    employee_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'employees',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    social_network_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'social_network',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    },
    account: {
      allowNull: false,
      type: Sequelize.STRING(255)
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    deletedAt: {
      type: Sequelize.DATE
    }
  });
},
  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('employees_social_networks');
  }
};