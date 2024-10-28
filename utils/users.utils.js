import { User } from "../models/users.models.js";
import bcrypt from "bcrypt";

export const validateRegistration = (reqBody) => {
  const errors = [];

  // Email validation
  if (!reqBody.email) {
    errors.push("Email is required");
  } else if (reqBody.email.length < 1 || reqBody.email.length >= 255) {
    errors.push("Email must be 1 and 255 characters long");
  } else if (!reqBody.email.includes("@")) {
    errors.push("Email must be formatted corectly");
  }

  // Password validation
  if (!reqBody.password) {
    errors.push("Password is required");
  } else if (reqBody.password.length < 6 || reqBody.password.length >= 1024) {
    errors.push("Password must be greater than 6 characters");
  }

  // Error reporting
  if (errors.length > 0) {
    return {
      errors: {
        details: errors,
      },
    };
  } else {
    return { errors: null }; // If no errors
  }
};

export const validateLogin = async (reqBody) => {
  const errors = [];

  // Email validation
  if (!reqBody.email) {
    errors.push("Email is required");
  } else if (reqBody.email.length < 1 || reqBody.email.length >= 255) {
    errors.push("Email must be 1 and 255 characters long");
  } else if (!reqBody.email.includes("@")) {
    errors.push("Email must be formatted corectly");
  }

  // Password validation

  if (!reqBody.password) {
    errors.push("Password is required");
  }

  const user = await User.findOne({ email: reqBody.email });
  if (!user) {
    errors.push("User not found");
  } else {
    const validatePassword = await bcrypt.compare(reqBody.password, user.password);
    if (!validatePassword) {
      errors.push("Incorrect password");
    }
  }

  // Error reporting
  if (errors.length > 0) {
    return {
      errors: {
        details: errors,
      },
    };
  } else {
    return { errors: null }; // If no errors
  }
};
