import TotalActions from "../models/TotalActions.js";

export const getTotalActions = async (req, res) => {
  try {
    const actions = await TotalActions.findAll();
    res.json(actions);
  } catch (error) {
    res.json({ message: error.message });
  }
};
