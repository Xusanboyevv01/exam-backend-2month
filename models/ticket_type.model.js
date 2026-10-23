module.exports = (sequelize, DataTypes) => {
  const TicketType = sequelize.define("TicketType", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_type: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "ticket_type",
    timestamps: false,
  });

  TicketType.associate = (models) => {
  };

  return TicketType;
};
