import * as userService from "../services/users.services.js";

// Register user
export const authorizeUser = async (req, res) => {
  try {
    const token = await userService.registerNewUser(req.body);
    res.status(201).send(token);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};