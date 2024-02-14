/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          email: 'admin@admin',
          password: bcrypt.hashSync('123', 10),
          isAdmin: true,
        },
        {
          username: 'John Doe',
          email: 'q@q',
          password: bcrypt.hashSync('123', 10),
          isAdmin: false,
        },
        {
          username: 'Some Body',
          email: 'w@w',
          password: bcrypt.hashSync('123', 10),
          isAdmin: false,
        },
        {
          username: 'Another Body',
          email: 'e@e',
          password: bcrypt.hashSync('123', 10),
          isAdmin: false,
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
