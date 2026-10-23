module.exports = (sequelize, DataTypes) => {
  const SeatType = sequelize.define("SeatType", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "seat_type",
    timestamps: false,
  });

  SeatType.associate = (models) => {
  };

  return SeatType;
};
