const express = require('express');
const mongoose = require('mongoose');
const app = express();

const notes = require('./routes/notes');

//Express Middleware
app.use(express.json());

//DB config
const db = require('./config/keys').mongoURI;

//DB Connection
mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser:true})
        .then(()=> console.log('MongoDB Connected'))
        .catch(err=> console.log(err));

//API

app.use('/notes',notes);


//Port

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));
