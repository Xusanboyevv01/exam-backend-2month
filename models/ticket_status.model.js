module.exports = (sequelize, DataTypes) => {
  const TicketStatus = sequelize.define("TicketStatus", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "ticket_status",
    timestamps: false,
  });

  TicketStatus.associate = (models) => {
  };

  return TicketStatus;
};
