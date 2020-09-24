const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
}) 

const Note = new mongoose.model('Note',noteSchema);
module.exports = Note;
