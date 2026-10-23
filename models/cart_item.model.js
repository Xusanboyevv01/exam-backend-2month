module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define("CartItem", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
    },
    cart_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "cart_item",
    timestamps: false,
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
    CartItem.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
  };

  return CartItem;
};
