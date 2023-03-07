const express = require('express');
const workoutRoutes = require('./routes/workouts.js')
const mongoose = require('mongoose');
require('dotenv').config();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to Mongo Atlas
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        // Listening
            app.listen(4000, ()=> {
            console.log("listening");
})
    }).catch((err)=> {
        console.log(err);
    })

