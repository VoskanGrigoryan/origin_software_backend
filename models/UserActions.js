//importa la conexion a la DB
import db from "../database/db.js";
//importa sequelize
import { DataTypes } from "sequelize";

const UserModel = db.define(
  "user_actions",
  {
    user_id: {
      type: DataTypes.INTEGER,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    currency: {
      type: DataTypes.STRING,
    },
    exchange: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    // action_id: {
    //   type: DataTypes.INTEGER,
    // },
  },
  {
    timestamps: false,
  }
);

export default UserModel;
