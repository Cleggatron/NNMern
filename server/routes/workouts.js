const express = require("express");
const workoutModel = require("../models/workoutModel");
const router = express.Router();

const Workout = require("../models/workoutModel") 

//Placeholder get all workouts
router.get("/", (req, res) => {
    res.json({message: "Get all workouts"});
})

//Placeholder get a single workout
router.get("/:id", (req, res) => {
    res.json({message: "Get a single workout"});
})

//Placeholder Post a workout
router.post("/", async (req, res) => {
    const {title, load, reps} = req.body;

    try {
        const workout = await workoutModel.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        console.log(error);
    }
    res.json({message: "Post a new workout"})
})

//Placeholder delete a workout
router.delete("/:id", (req, res) => {
    res.json({message: "Delete a new workout"})
})

//Placeholder update a workout
router.patch("/:id", (req, res) => {
    res.json({message: "Update a new workout"})
})

module.exports = router;