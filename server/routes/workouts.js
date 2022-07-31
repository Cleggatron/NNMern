const express = require("express");
const router = express.Router();

//Placeholder get all workouts
router.get("/", (req, res) => {
    res.json({message: "Get all workouts"});
})

//Placeholder get a single workout
router.get("/:id", (req, res) => {
    res.json({message: "Get a single workout"});
})

//Placeholder Post a workout
router.post("/", (req, res) => {
    res.json({message: "Post a new workout"})
})

//Placeholder delete a workout
router.delete("/:id", (req, res) => {
    res.json({message: "Delete a new workout"})
})

//Placeholder update a workout
router.patch("/", (req, res) => {
    res.json({message: "Update a new workout"})
})

module.exports = router;