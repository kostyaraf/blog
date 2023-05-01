import User from "../models/Users.js";
import bcrypt from 'bcryptjs'

// Register
export const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const isUsed = await User.findOne({ username });

    if (isUsed) {
      return res.status(402).json({message: 'Username is already used!'})
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      password
    })

    await newUser.save()

    res.status(200).json({message: "Successful registration!"})
  } catch (error) {
    res.status(500).json({message: "Registration failed!"})
  }
};

// Login
export const login = async (req, res) => {
  try {
  } catch (error) {}
};

// Profile
export const getMe = async (req, res) => {
  try {
  } catch (error) {}
};
