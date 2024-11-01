import * as workoutsService from "../services/workouts.services.js";

export const createWorkout = async (req, res) => {
  const userId = req.body._id;
  const workoutTitle = req.body.workoutTitle;
  const exerciseName = req.body.exerciseName;
  const setNo = req.body.setNo;
  const targetReps = req.body.targetReps;

  try {
    const createdWorkout = await workoutsService.createWorkout(
      userId,
      workoutTitle,
      exerciseName,
      setNo,
      targetReps
    );
    res.status(200).send(createdWorkout);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};


export const logWorkout = async (req, res) => {
  const userId = req.user._id;
  const workoutTitle = req.body.workoutTitle;

  try {
    const loggedWorkout = await workoutsService.logWorkout(
      userId,
      workoutTitle,
    )
    res.status(200).send(loggedWorkout);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}
