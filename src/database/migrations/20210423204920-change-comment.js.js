'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('comments', 'comment', 'content');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('comments', 'content', 'comment');
  }
};
