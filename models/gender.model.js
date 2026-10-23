module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "gender",
    timestamps: false,
  });

  Gender.associate = (models) => {
  };

  return Gender;
};
