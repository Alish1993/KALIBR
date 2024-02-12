const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class OrderedServices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      this.belongsTo(Order, { foreignKey: 'orderId' });
    }
  }
  OrderedServices.init(
    {
      orderId: DataTypes.INTEGER,
      serviceId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'OrderedServices',
    }
  );
  return OrderedServices;
};
