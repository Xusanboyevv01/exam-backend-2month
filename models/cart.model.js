module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    finishedAt: {
      type: DataTypes.DATE,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "cart",
    timestamps: false,
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Cart;
};
