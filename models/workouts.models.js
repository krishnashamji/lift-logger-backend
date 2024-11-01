import mongoose from "mongoose";

const workoutsSchema = new mongoose.Schema({
  userId: { 
    type: String, 
    unique: true 
  },
  workoutTitle: {
    type: String,
    required: true,
    minlength: 1,
  },
  exercise: [
    {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      sets: [
        {
          setNo: { type: Number, unique: true },
          targetReps: { type: String, default: "8-10" },
        },
      ],
    },
  ],
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

export { Workouts };


