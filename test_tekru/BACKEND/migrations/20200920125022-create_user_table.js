'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: { type: Sequelize.STRING },
      family_name: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      last_login_date: { type: Sequelize.DATE, allowNull: true },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      updated_at: { type: Sequelize.DATE, allowNull: true }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users")
  }
};
