// Packages
import { request, response } from "express";
import bcryptjs from "bcryptjs";

// Helpers
import generarJWT from "../helpers/jwt";

// Models
import UserModel from "../models/user.model";

/**
 * Function to make the user login
 */
export const loginService = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists
    const usuario = await UserModel.findOne({ email });
    if (!usuario) {
      return res
        .status(400)
        .json({ msg: "Usuario / password no son correctos" });
    }

    // Check if the user is active
    if (!usuario.state) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }
    // validate password
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }

    // Generate JWT
    const token = await generarJWT(usuario.id);
    res.json({ usuario, token });
  } catch (error) {
    return res.status(500).json({ msg: "Hable con el administrador" });
  }
};
