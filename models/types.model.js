module.exports = (sequelize, DataTypes) => {
  const Types = sequelize.define("Types", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "types",
    timestamps: false,
  });

  Types.associate = (models) => {
  };

  return Types;
};
