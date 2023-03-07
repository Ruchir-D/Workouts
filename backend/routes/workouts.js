const express = require('express');
const Workout = require('../models/Workout.js')

const router = express.Router();

// GET ALL WORKOUTS
router.get('/', (req, res)=> {
    res.json({mssg: 'Get all workout'})
})

// GET SINGLE WORKOUTS
router.get('/:id', (req, res)=>{
    res.json({msg: "Get a single workout"})
})

// Post a new workout
router.post('/', async (req, res)=>{

    const {title, load, reps} = req.body
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch(error){
        res.json({error: error});
    }
})

// DELETE A WORKOUT
router.delete('/:id', (req, res)=>{
    res.json({msg: "Delete a workout"})
})

// UPDATE A WORKOUT
router.patch('/:id', (req, res)=>{
    res.json({msg: "Update workout"})
})

module.exports = router