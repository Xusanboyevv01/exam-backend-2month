module.exports = (sequelize, DataTypes) => {
  const VenuePhoto = sequelize.define("VenuePhoto", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
    url: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "venue_photo",
    timestamps: false,
  });

  VenuePhoto.associate = (models) => {
    VenuePhoto.belongsTo(models.Venue, {
      foreignKey: "venueId",
      as: "venue",
    });
  };

  return VenuePhoto;
};
