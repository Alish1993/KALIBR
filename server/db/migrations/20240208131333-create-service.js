/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amountMachine: {
        type: Sequelize.INTEGER,
      },
      machine: {
        type: Sequelize.STRING,
      },
      time: {
        type: Sequelize.INTEGER,
      },
      path: {
        type: Sequelize.INTEGER,
      },
      amountLoader: {
        type: Sequelize.INTEGER,
      },
      workTime: {
        type: Sequelize.INTEGER,
      },
      box: {
        type: Sequelize.INTEGER,
      },
      roll: {
        type: Sequelize.INTEGER,
      },
      scotch: {
        type: Sequelize.INTEGER,
      },
      stretchRoll: {
        type: Sequelize.INTEGER,
      },
      order_id: {
        type: Sequelize.INTEGER,
        references: {       
          model: 'Orders',
          key: 'id',
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  },
};
