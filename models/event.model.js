module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    start_time: {
      type: DataTypes.TIME,
    },
    finish_date: {
      type: DataTypes.DATE,
    },
    finish_time: {
      type: DataTypes.TIME,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
    },
    venue_id: {
      type: DataTypes.INTEGER,
    },
    lang_id: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: "event",
    timestamps: false,
  });

  Event.associate = (models) => {
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "event_type",
    });
    Event.belongsTo(models.HumanCategory, {
      foreignKey: "human_category_id",
      as: "human_category",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
  };

  return Event;
};
