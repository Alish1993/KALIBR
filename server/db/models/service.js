const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order }) {
      this.belongsTo(Order, {foreignKey: 'order_id',});
    }
  }
  Service.init(
    {
      amountMachine: DataTypes.INTEGER,
      machine: DataTypes.STRING,
      time: DataTypes.INTEGER,
      path: DataTypes.INTEGER,
      amountLoader: DataTypes.INTEGER,
      workTime: DataTypes.INTEGER,
      box: DataTypes.INTEGER,
      roll: DataTypes.INTEGER,
      scotch: DataTypes.INTEGER,
      stretchRoll: DataTypes.INTEGER,
      order_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Service',
    },
  );
  return Service;
};
