const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an amount",
  },
  duration: {
    type: Number,
    required: "Enter an amount",
  },
  weight: {
    type: Number,
    required: "Enter an amount",
  },
  reps: {
    type: Number,
    required: "Enter an amount",
  },
  sets: {
    type: Number,
    required: "Enter an amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
