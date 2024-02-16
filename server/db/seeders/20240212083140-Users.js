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
          username: 'Алишер',
          email: 'ali@123',
          password: bcrypt.hashSync('123', 10),
          isAdmin: false,
        },
        {
          username: 'Сергей',
          email: 'sergei@777',
          password: bcrypt.hashSync('123', 10),
          isAdmin: false,
        },
        {
          username: 'Евгений',
          email: 'jenka@111',
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
