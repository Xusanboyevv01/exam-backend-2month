module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    finishedAt: {
      type: DataTypes.DATE,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
    },
    discount_id: {
      type: DataTypes.INTEGER,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "booking",
    timestamps: false,
  });

  Booking.associate = (models) => {
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: "payment_method_id",
      as: "payment_method",
    });
    Booking.belongsTo(models.DeliveryMethod, {
      foreignKey: "delivery_method_id",
      as: "delivery_method",
    });
    Booking.belongsTo(models.Discount, {
      foreignKey: "discount_id",
      as: "discount",
    });
    Booking.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
  };

  return Booking;
};
