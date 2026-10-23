module.exports = (sequelize, DataTypes) => {
  const HumanCategory = sequelize.define("HumanCategory", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    start_age: {
      type: DataTypes.SMALLINT,
    },
    finish_age: {
      type: DataTypes.SMALLINT,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: "human_category",
    timestamps: false,
  });

  HumanCategory.associate = (models) => {
    HumanCategory.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
  };

  return HumanCategory;
};
