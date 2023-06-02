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
    employeeId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Employee',
        key: 'id',
      }
    },
    socialNetworkId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'SocialNetwork',
        key: 'id',
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