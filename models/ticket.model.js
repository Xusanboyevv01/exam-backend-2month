module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
    },
    seat_id: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    service_fee: {
      type: DataTypes.DECIMAL,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
    ticket_type_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "ticket",
    timestamps: false,
  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.TicketStatus, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.belongsTo(models.TicketType, {
      foreignKey: "ticket_type_id",
      as: "ticket_type",
    });
  };

  return Ticket;
};
