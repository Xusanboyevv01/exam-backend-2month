module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "region",
    timestamps: false,
  });

  Region.associate = (models) => {
  };

  return Region;
};
