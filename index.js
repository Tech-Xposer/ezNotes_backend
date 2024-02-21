const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.DB_URL)
    .then(()=>{
        app.listen(PORT, ()=>{
            console.log(`Server is listening on port ${PORT}\n http://localhost:${PORT}`);
        })
    })

