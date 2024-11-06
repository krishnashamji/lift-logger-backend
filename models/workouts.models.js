import mongoose, { Schema } from "mongoose";


const kgAndReps = new Schema({
  kg: { type: Number, default: 0 },
  reps: { type: Number, default: 0 },
})

const setSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  setNo: { type: Number, required: true },
  previous: { type: String, default: "" },
  targetReps: { type: String, default: "8-10" },
  kgAndReps: [kgAndReps]
});

const exerciseSchema = new Schema({
  name: { type: String, required: true },
  sets: [setSchema]
});

const workoutsSchema = new Schema({
  workoutTitle: { type: String, required: true, minlength: 1},
  exercises: [exerciseSchema]
});

const userWorkoutsSchema = new Schema({
  userId: { type: String, require: true},
  workouts: [workoutsSchema]
});


const Workouts = mongoose.model("Workouts", userWorkoutsSchema);

export { Workouts };
