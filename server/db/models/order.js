const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Service, OrderedServices }) {
      this.belongsToMany(Service, {
        through: 'OrderedServices',
        foreignKey: 'orderId',
      });
      // this.hasMany(OrderedServices, { foreignKey: 'orderId' });
    }
  }
  Order.init(
    {
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
