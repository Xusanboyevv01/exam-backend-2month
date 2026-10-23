module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    parent_event_type_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "event_type",
    timestamps: false,
  });

  EventType.associate = (models) => {
    EventType.belongsTo(models.EventType, {
      foreignKey: "parent_event_type_id",
      as: "parent",
    });
  };

  return EventType;
};
