import * as exercisesService from "../services/exercises.services.js";

export const getExercises = async (req, res) => {
  try {
    const exercises = await exercisesService.fetchExercises();
    res.status(200).send(exercises);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
