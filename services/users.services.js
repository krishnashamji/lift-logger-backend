import jwt from "jsonwebtoken";
import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";
import { jwtPrivateKey } from "../config/jwtPrivateKey.config.js";
import { validateRegistration, validateLogin } from "../utils/users.utils.js";

export const authorizeUser = async (reqBody) => {
  // Checks if the user already exists
  const user = await User.findOne({ email: reqBody.email });

  // If user DOES exist, log them in
  if (user) {
    // Validates incoming request body
    const { errors } = await validateLogin(reqBody);
    if (errors) throw new Error(errors.details);

    // Generate jwt token
    const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

    return token;
  } else {
    // Validates incoming request body
    const { errors } = await validateRegistration(reqBody);
    if (errors) throw new Error(errors.details);

    // Create user in the database
    const user = new User({
      email: reqBody.email,
      password: await bcrypt.hash(reqBody.password, 12),
    });

    await user.save();

    // Generate jwt token
    const token = jwt.sign({ _id: user._id }, jwtPrivateKey);

    return token;
  }
};

