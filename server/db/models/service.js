const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, OrderedServices }) {
      this.belongsToMany(Order, {
        through: 'OrderedServices',
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
