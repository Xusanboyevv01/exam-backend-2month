module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define("Sector", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "sector",
    timestamps: false,
  });

  Sector.associate = (models) => {
  };

  return Sector;
};
