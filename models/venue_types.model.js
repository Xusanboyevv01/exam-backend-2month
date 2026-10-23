module.exports = (sequelize, DataTypes) => {
  const VenueTypes = sequelize.define("VenueTypes", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
    typeId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "venue_types",
    timestamps: false,
  });

  VenueTypes.associate = (models) => {
    VenueTypes.belongsTo(models.Venue, {
      foreignKey: "venueId",
      as: "venue",
    });
    VenueTypes.belongsTo(models.Types, {
      foreignKey: "typeId",
      as: "type",
    });
  };

  return VenueTypes;
};
