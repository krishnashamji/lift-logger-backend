import { User } from "../models/users.models.js";
import { Workouts } from "../models/workouts.models.js";

export const createWorkout = (
  userId,
  workoutTitle,
  setNo,
  exerciseName,
  targetReps
) => {
  const workout = new Workouts({
    userId: userId,
    workouts: [
      {
        workoutTitle: workoutTitle,
        exercise: [
          {
            name: exerciseName,
            sets: [
              {
                setNo: setNo,
                targetReps: targetReps,
              },
            ],
          },
        ],
      },
    ],
  });
  return workout.save();
};

export const logWorkout = async (userId, workouts, exerciseName, kgs, reps) => {
  try {
    const workout = await Workouts.findOne({
      userId,
      workouts,
    });

    if (!workout) {
      throw new Error("Workout not found");
    }


  } catch (error) {}
};

// {
//   userId: "oij4ce"
//   workoutTitle: "chest & back",
//   exercises: [
//     {
//       name: "chest press",
//       sets: [
//         { setNo: 1, previous: null, targetReps: "8-10" },
//         { setNo: 2, previous: null, targetReps: "8-10" },
//         { setNo: 3, previous: null, targetReps: "8-10" }
//       ]
//     },
//     {
//       name: "back row",
//       sets: [
//         { setNo: 1, previous: null, targetReps: "8-10" },
//         { setNo: 2, previous: null, targetReps: "8-10" }
//       ]
//     }
//   ]
// }
