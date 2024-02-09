const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderedService extends Model {
    // static associate({ Order }) {
    // this.belongsTo(Order, { foreignKey: 'orderId' });
    // }
  }
  OrderedService.init(
    {
      orderId: DataTypes.INTEGER,
      serviceId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OrderedService',
    },
  );
  return OrderedService;
};
