require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')
const notesRoute = require('./routes/noteRoutes')
const { checkUserAuth } = require('./middlewares/auth')
const PORT = process.env.PORT || 3000;

const app = express()

app.use(express.json())

// public routes
app.use('/api/user', userRoute)

// protected routes
app.use('/api/note', checkUserAuth, notesRoute)

mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}\n http://localhost:${PORT}`);
        })
    })



