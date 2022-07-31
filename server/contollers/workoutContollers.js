const { default: mongoose } = require("mongoose");
const Workout = require("../models/workoutModel");

//get all workouts
const getAllWorkouts = async (req, res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch(error){
        res.status(400).json({error: error.message});
    }
    
}

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findById(id);

    if(!workout){
        return res.status(404).json({error: "No such workout"})
    }
    res.status(200).json(workout);
}

//create a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load}= req.body;

    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndDelete({_id : id});

    if(!workout){
        res.status(404).json({error: "No such workout"});
    }

    res.status(200).json(workout);
}

//patch a workout
const updateWorkout = async (req, res) => {
    const { id }  = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {...req.body});

    if(!workout){
        res.status(404).json({error: "No such workout"});
    }

    res.status(200).json({workout});
}


module.exports = {createWorkout, getAllWorkouts, getSingleWorkout, deleteWorkout, updateWorkout}