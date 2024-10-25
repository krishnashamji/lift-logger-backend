import * as userService from "../service/user.service.js";

// Register user
export const registerNewUser = async (req, res) => {
  try {
    const token = await userService.registerNewUser(req.body);
    res.status(201).send(token);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body);
    res.status(201).send(token);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
