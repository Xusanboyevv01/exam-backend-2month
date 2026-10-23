module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    login: {
      type: DataTypes.STRING,
    },
    hashed_password: {
      type: DataTypes.STRING,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
    },
    is_creator: {
      type: DataTypes.BOOLEAN,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "admin",
    timestamps: false,
  });

  Admin.associate = (models) => {
  };

  return Admin;
};
