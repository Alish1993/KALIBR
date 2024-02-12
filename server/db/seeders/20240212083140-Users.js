/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'John Doe',
          email: 'q@q',
          password: bcrypt.hashSync('123', 10),
        },
        {
          username: 'Some Body',
          email: 'w@w',
          password: bcrypt.hashSync('123', 10),
        },
        {
          username: 'Another Body',
          email: 'e@e',
          password: bcrypt.hashSync('123', 10),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
