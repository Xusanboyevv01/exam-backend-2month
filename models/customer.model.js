module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    hashed_password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    gender_id: {
      type: DataTypes.INTEGER,
    },
    lang_id: {
      type: DataTypes.INTEGER,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: "customer",
    timestamps: false,
  });

  Customer.associate = (models) => {
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Customer.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
  };

  return Customer;
};
