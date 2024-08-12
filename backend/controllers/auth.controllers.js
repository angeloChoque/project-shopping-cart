import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({ message: "The email is already in use" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      userName,
    });

    await newUser.save();

    jwt.sign(
      {
        id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) console.log(err);
        res.cookie("token", token);
        res.json(newUser);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password" });

    jwt.sign(
      {
        id: userFound._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) console.log(err);
        res.cookie("token", token);
        res.json(userFound);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).send("error!!");
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false); 

  jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
    if (error) return res.sendStatus(401);
    try {
      const userFound = await User.findById(decoded.id);
      if (!userFound) return res.sendStatus(401); 

      return res.json({
        id: userFound._id,
        username: userFound.userName,
        email: userFound.email,
      });
    } catch (error) {
      console.error('Error al buscar usuario:', error);
      return res.sendStatus(500);
    }
  });
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "User not found " });
  return res.json(userFound);
};
