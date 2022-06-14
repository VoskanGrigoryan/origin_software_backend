//importa la conexion a la DB
import db from "../database/db.js";
//importa sequelize
import { DataTypes } from "sequelize";

const UserModel = db.define("users", {
  // id: {
  //   type: DataTypes.STRING,
  //   primaryKey: true,
  // },
  user_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

// UserModel.belongsToMany(TotalActionsModel, { through: "user_actions" });
export default UserModel;
