module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define("PaymentMethod", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "payment_method",
    timestamps: false,
  });

  PaymentMethod.associate = (models) => {
  };

  return PaymentMethod;
};
