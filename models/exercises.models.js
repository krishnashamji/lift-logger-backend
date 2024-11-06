import mongoose from "mongoose";

const exercisesSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  muscle: { type: String },
  muscleGroup: { type: String },
  equipment: { type: String },
  difficulty: { type: String },
  instructions: { type: String },
});

exercisesSchema.pre('save', function (next) {
  if (this.muscle === "chest") {
    this.muscleGroup = "chest";
  } else if (["abdominals", "abductors", "adductors"].includes(this.muscle)) {
    this.muscleGroup = "abs";
  } else if (["biceps", "forearms", "triceps"].includes(this.muscle)) {
    this.muscleGroup = "arms";
  } else if (["calves", "glutes", "hamstrings", "quadriceps"].includes(this.muscle)) {
    this.muscleGroup = "legs";
  } else if (["lats", "lower_back", "middle_back", "traps"].includes(this.muscle)) {
    this.muscleGroup = "back";
  }
  next(); 
});

const ExercisesModel = mongoose.model("exercises", exercisesSchema);

export { ExercisesModel };

