import * as exercisesService from "../services/exercises.services.js";

export const getExercises = async (req, res) => {
  try {
    const muscle = req.query.muscle;
    const exercises = await exercisesService.fetchExercises(muscle);
    res.status(200).send(exercises);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
