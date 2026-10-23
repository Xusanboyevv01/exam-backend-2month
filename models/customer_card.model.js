module.exports = (sequelize, DataTypes) => {
  const CustomerCard = sequelize.define("CustomerCard", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    month: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    tableName: "customer_card",
    timestamps: false,
  });

  CustomerCard.associate = (models) => {
    CustomerCard.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };

  return CustomerCard;
};
