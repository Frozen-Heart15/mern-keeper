const express = require('express');
const router = express.Router();

const Note = require('../models/Notes');

// @route  GET /notes
// @desc   GET all notes
// @access Public
router.get('/',(req,res)=>{
    Note.find()
        .sort({date:-1})
        .then(notes => res.json(notes))
        .catch(err=> console.log(err));
})

// @route  POST /notes
// @desc   Create a note
// @access Public
router.post('/',(req,res)=>{
    let newNote = new Note({
        title:req.body.title,
        content:req.body.content
    })
    newNote.save()
           .then(note => res.json(note))
           .catch(err => console.log(err));
})


// @route  DELETE /notes/id
// @desc   Delete a note
// @access Public
router.delete('/:id',(req,res)=>{
    Note.findById(req.params.id)
        .then(note => note.remove().then(res.json({success:true})))
        .catch(err => res.status(404).json({success: false}));
})

module.exports = router;