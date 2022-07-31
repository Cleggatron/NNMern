const express = require("express");
const router = express.Router();

const {createWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout} = require("../contollers/workoutContollers")

//Placeholder get all workouts
router.get("/", getAllWorkouts);

//Placeholder get a single workout
router.get("/:id", getSingleWorkout);

//Placeholder Post a workout
router.post("/", createWorkout);

//Placeholder delete a workout
router.delete("/:id", deleteWorkout)

//Placeholder update a workout
router.patch("/:id", updateWorkout)

module.exports = router;