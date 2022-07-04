import UserActions from "../models/UserActions.js";
import UserModel from "../models/UserModel.js";

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
    const userData = await UserModel.findOne({
      where: { user_name: req.body.userName },
    });

    const { symbol, name, currency, exchange, mic_code, country, type } =
      req.body.action;

    //Object with added user_id, needed for mysql because userActions table need that column
    const obj = {
      user_id: userData.id,
      symbol,
      name,
      currency,
      exchange,
      mic_code,
      country,
      type,
    };

    await UserActions.create(obj);

    res.json(obj);

    return "action added!";
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
