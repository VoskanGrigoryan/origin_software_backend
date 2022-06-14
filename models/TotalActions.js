//importa la conexion a la DB
import db from "../database/db.js";
//importa sequelize
import { DataTypes } from "sequelize";

const TotalActionsModel = db.define(
  "actions_totals",
  {
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
  },
  {
    timestamps: false,
  }
);

// TotalActionsModel.belongsToMany(UserModel, { through: "user_actions" });
export default TotalActionsModel;
