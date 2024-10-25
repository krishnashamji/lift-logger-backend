import jwt from "jsonwebtoken";
import { User } from "../models/users.models.js";
import bcrypt from "bcrypt"
import { jwtPrivateKey } from "../config/jwtPrivateKey.config.js";
import { validateRegistration, validateLogin } from "../utils/users.utils.js";

export const authorizeUser = async (req) => {
  // Checks if the user already exists
  const user = await User.findOne({ email: req.email });

  // If user DOES exist, log them in
  if (user) {
    // Validates incoming request body
    const { errors } = validateLogin(req.body);
    if (errors) throw new Error(errors.details);

    // Generate jwt token
    const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

    return token;
  } else {
    // Validates incoming request body
    const { errors } = validateRegistration(req);
    if (errors) throw new Error(errors.details);

    // Create user in the database
    const user = new User({
      email: req.email,
      password: await bcrypt.hash(req.password, 12),
    });

    await user.save();

    // Generate jwt token
    const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

    return token;
  }
};

