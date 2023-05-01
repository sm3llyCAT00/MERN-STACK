require('dotenv').config() //use .env to hide important 


const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// app.use('/api/workouts', workoutRoutes)

// removed and create separate folder for routes
app.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// listen for req
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!!');
})