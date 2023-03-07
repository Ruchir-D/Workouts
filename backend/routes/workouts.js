const express = require('express');
// const Workout = require('../models/Workout.js')
const { createWorkout, getWorkout, getWorkouts } = require('../controllers/workoutcontrollers.js')

const router = express.Router();

// GET ALL WORKOUTS
router.get('/', getWorkouts)

// GET SINGLE WORKOUTS
router.get('/:id',getWorkout)

// Post a new workout
router.post('/', createWorkout);

// DELETE A WORKOUT
router.delete('/:id', (req, res)=>{
    res.json({msg: "Delete a workout"})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res)=>{
    res.json({msg: "Update workout"})
})

module.exports = router