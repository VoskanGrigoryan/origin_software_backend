import UserActions from "../models/UserActions.js";
import TotalActionsModel from "../models/TotalActions.js";

export const getUserActions = async (req, res) => {
  try {
    const userActions = await UserActions.findAll({
      where: { user_id: req.body.user_id },
    });
    res.json(userActions);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const addAction = async (req, res) => {
  try {
    const action = await TotalActionsModel.findOne({
      where: { symbol: req.body.symbol },
    });

    const { id, symbol, name, currency, exchange, country, type } = action;

    //Object with added user_id, needed for mysql because userActions table need that column
    const obj = {
      //user_id is being hardcoded, should fetch user_id with another findOne call
      user_id: 1,
      // action_id: id,
      id: id,
      symbol: symbol,
      name: name,
      currency: currency,
      exchange: exchange,
      country: country,
      type: type,
    };

    await UserActions.create(obj);
    const message = res.json(obj);

    return message;
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const removeAction = async (req, res) => {
  console.log(req);
  try {
    await UserActions.destroy({
      where: { symbol: req.params.symbol },
    });
    res.json({
      message: req.params.symbol,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
