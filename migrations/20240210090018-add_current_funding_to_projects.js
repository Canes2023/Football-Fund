'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('projects', 'current_funding', {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('projects', 'current_funding');
  }
};
// Path: Football-Fund/migrations/20240210090018-add_current_funding_to_projects.js