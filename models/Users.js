const { Model, DataType } = require("sequelize");
const bcrypt = require("bcrypt");
const connection = require("../config/connection");

class User extends Model {}
User.init(
  {
    username: DataType.STRING,
    password: DataType.STRING,
  },
  {
    connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);
