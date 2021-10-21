const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name",
      },
      duration: {
        type: Number,
        required: "Enter an number",
      },
      weight: {
        type: Number,
        required: "Enter an number",
      },
      reps: {
        type: Number,
        required: "Enter an number",
      },
      sets: {
        type: Number,
        required: "Enter an number",
      },
    },
  ],
},
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
      );

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
