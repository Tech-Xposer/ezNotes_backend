require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoutes');
const notesRoute = require('./routes/noteRoutes');
const { checkUserAuth } = require('./middlewares/auth');
const PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

// public routes
app.use('/api/user', userRoute);

// protected routes
app.use('/api/note', checkUserAuth, notesRoute);

app.get('/', async (req, res) => {
    res.status(200).send('Welcome to EzNotes API');
});

mongoose.connect(process.env.DB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}\n http://localhost:${PORT}`);
        });
    });
