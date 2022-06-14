import UserModel from "../models/UserModel.js";

//Funcion para login, trae usuario.
/*Falta:
  1.Encriptar contraseñas
*/

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      where: { email: req.body.email },
    });

    console.log("THIS IS PASSWORD", user.password, req.body.password);
    // if (user.password !== req.body.password) {
    //   return;
    // }
    res.json(user);
  } catch (error) {
    res.json({ message: error.message });
  }
};
