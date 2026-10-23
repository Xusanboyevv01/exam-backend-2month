module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define("Lang", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "lang",
    timestamps: false,
  });

  Lang.associate = (models) => {
  };

  return Lang;
};
