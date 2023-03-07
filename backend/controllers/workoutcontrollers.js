const Workout = require("../models/Workout");
const mongoose = require('mongoose');

// GET ALL WORKOUTS
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts);
}


// GET ONE WORKOUT
const getWorkout = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({msg: 'No such Workout'});
    }
    const workout = await Workout.findById(id);
    if(!workout) {
        return res.status(404).json({msg: "No such workout"});
    }
    res.status(200).json(workout);

}


// CREATE NEW WORKOUT
const createWorkout = async (req, res) => {

    const {title, reps, load} = req.body;

    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch(err){
        res.status(400).json({err: err.message});
    }
}


// DELETE A WORKOUT




// UPDATE A WORKOUT

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout
}