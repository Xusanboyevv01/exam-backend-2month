module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    eta: {
      type: DataTypes.INTEGER,
    },
    condition: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "flat",
    timestamps: false,
  });

  Flat.associate = (models) => {
  };

  return Flat;
};
