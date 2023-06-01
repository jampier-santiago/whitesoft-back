// Packages
import { request, response } from "express";
import bcryptjs from "bcryptjs";

// Helpers
import generarJWT from "../helpers/jwt";

// Models
import UserModel from "../models/user.model";

export const loginService = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const usuario = await UserModel.findOne({ email });
    if (!usuario) {
      return res
        .status(400)
        .json({ msg: "Usuario / password no son correctos" });
    }
    // Ver si el usuario esta activo
    if (!usuario.state) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }
    // Validar contraseña
    const validPassword = bcryptjs.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos",
      });
    }
    // JWT
    const token = await generarJWT(usuario.id);
    res.json({ usuario, token });
  } catch (error) {
    return res.status(500).json({ msg: "Hable con el administrador" });
  }
};
