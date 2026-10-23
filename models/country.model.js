module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    country_name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "country",
    timestamps: false,
  });

  Country.associate = (models) => {
  };

  return Country;
};
