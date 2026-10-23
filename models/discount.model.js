module.exports = (sequelize, DataTypes) => {
  const Discount = sequelize.define("Discount", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    discount: {
      type: DataTypes.STRING,
    },
    finish_date: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: "discount",
    timestamps: false,
  });

  Discount.associate = (models) => {
  };

  return Discount;
};
