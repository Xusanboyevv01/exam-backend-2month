module.exports = (sequelize, DataTypes) => {
  const DeliveryMethod = sequelize.define("DeliveryMethod", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "delivery_method",
    timestamps: false,
  });

  DeliveryMethod.associate = (models) => {
  };

  return DeliveryMethod;
};
