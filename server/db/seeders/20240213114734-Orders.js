/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        { name: 'John Doe', phone: '88005353535', email: 'qwe@ewq' },
        { name: 'Fsff Boe', phone: '77005353535', email: 'wqeqwe@weewq' },
        { name: 'Zscf Coe', phone: '99005353535', email: 'qweqwe@ewqwe' },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  },
};
