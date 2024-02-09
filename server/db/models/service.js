const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, OrderedService }) {
      this.belongsToMany(Order, {
        through: OrderedService,
        foreignKey: 'serviceId',
      });
    }
  }
  Service.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Service',
    },
  );
  return Service;
};
