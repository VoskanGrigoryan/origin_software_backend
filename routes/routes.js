import express from "express";
// import { getUser } from "../controllers/UserController.js";
// import { addAction } from "../controllers/ActionsController";
// import { getAllActions } from "../controllers/TotalActionsController.js";

import { getUser } from "../controllers/UserController.js";
import {
  addAction,
  getUserActions,
  removeAction,
} from "../controllers/ActionsController.js";

const router = express.Router();

//Actions

//Gets all the actions assigned to a specific user
router.post("/user-actions", getUserActions);
//Adds an action for the user
router.post("/add-action", addAction);
//Removes an action from the user
router.delete("/delete-action/:symbol", removeAction);

//Users
router.post("/login", getUser);

export default router;
