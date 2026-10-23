module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    region_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "district",
    timestamps: false,
  });

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
  };

  return District;
};
