import { User } from "../models/users.model";

export const validateRegistration = (req) => {
  const errors = [];

  // Email validation
  if (!req.email) {
    errors.push("Email is required");
  } else if (req.email.length < 1 || req.email.length >= 255) {
    errors.push("Email must be 1 and 255 characters long");
  } else if (req.email.includes("@")) {
    errors.push("Email must be formatted corectly");
  }

  // Password validation
  if (!req.password) {
    errors.push("Password is required");
  } else if (req.password < 6 || req.password >= 1024) {
    errors.push("Password must be greater than 6 characters");
  }

  // Error reporting
  if (errors.length > 0) {
    return {
      errors: {
        details: errors,
      },
    };
  }

  // If no errors
  return { errors: null };
};

export const validateLogin = async (req) => {
  const errors = [];

  // Email validation
  if (!req.email) {
    errors.push("Email is required");
  } else if (req.email.length < 1 || req.email.length >= 255) {
    errors.push("Email must be 1 and 255 characters long");
  } else if (req.email.includes("@")) {
    errors.push("Email must be formatted corectly");
  }

  // Password validation
  const validatePassword = await bcrypt.compare(req.password, User.password);
  if (!validatePassword) {
    errors.push("Incorrect password");
  }

  // Error reporting
  if (errors.length > 0) {
    return {
      errors: {
        details: errors,
      },
    };
  }

  // If no errors
  return { errors: null };
};
