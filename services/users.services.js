import jwt from "jsonwebtoken";
import { User } from "../models/users.model";
import bcrypt from "bcrypt";
import { jwtPrivateKey } from "../config/jwtPrivateKey.config";
import { validateRegistration, validateLogin } from "../utils/users.utils";

export const registerNewUser = async (req) => {
  // Validates incoming request body
  const { errors } = validateRegistration(req);
  if (errors) throw new Error(errors.details);

  // Checks if the user already exists
  const user = await User.find({ email: req.email });
  if (user) throw new Error("User already exists");

  // Create new user object if user doesn't exist and save it
  if (!user) {
    const user = new User({
      email: req.email,
      password: await bcrypt.hash(req.password, 12),
    });
    await user.save();
  }

  // Generate jwt token
  const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

  return token;
};

export const loginUser = async (req) => {
  // Validates incoming request body
  const { errors } = validateLogin(req.body);
  if (errors) throw new Error(errors.details);

  // Checks if user doesn't exist
  const user = await User.find({ email: req.email });
  if (!user) {
    throw new Error("Invalid email");
  }

  const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

  return token;
};
