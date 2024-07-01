import User from "../models/user.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const login = (req, res) => res.send("login");
