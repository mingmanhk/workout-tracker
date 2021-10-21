const router = require("express").Router();
const workout = require("../models/workout.js");

// get all workouts
router.get("/api/workouts", (req, res) => {
  workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
  workout
    .findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
    .then((data) => {
      console.log(date);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// create workout
router.post("/api/workouts", ({ body }, res) => {
  workout
    .create(body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get workout
router.get("/api/workouts/range", (req, res) => {
  workout
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
