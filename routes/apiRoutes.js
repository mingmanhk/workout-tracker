const router = require("express").Router();
const workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
  workout.find({})
    .then((dbWorkout) => {
      // console.log("ALL WORKOUTS");
      // console.log(dbWorkout);
      dbWorkout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//create workout
router.post("/api/workouts", ({ body }, res) => {
  // console.log("WORKOUT TO BE ADDED");
  // console.log(body);

  workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// get workouts in range
router.get("/api/workouts/range", (req, res) => {
  console.log("Start Here")
  workout.find({})
    .then((dbWorkout) => {
      console.log("ALL WORKOUTS");
      console.log(dbWorkout);

      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
