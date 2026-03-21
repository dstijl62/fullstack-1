"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("markdowns", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      contentHTML: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT("long"),
      },
      contentMarkdown: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT("long"),
      },
      description: {
        allowNull: true,
        type: Sequelize.DataTypes.TEXT("long"),
      },
      doctorId: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      specialtyId: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      clinicId: {
        allowNull: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("markdowns");
  },
};
