import mongoose from "mongoose";

const workoutLogSchema = new mongoose.Schema({
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
        //   previous: {type: String, }, // How can I set the "previous" field to be a concatenated string of the "kg" and "reps" values from the last workout log, formatted like this: "${kg} KG X ${reps}"?
          targetReps: { type: String, default: "8-10" },
          kg: { type: Number },
          reps: { type: Number },
        },
      ],
    },
  ],
});

const WorkoutLog = mongoose.model("WorkoutLog", workoutLogSchema);

export { WorkoutLog };


