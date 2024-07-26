const notesCroller = {};

const Note = require('../models/Note');

notesCroller.getNotes = async (req, res) => {
    const notes = await Note.find()
    res.json(notes);
}

notesCroller.createNotes = async (req, res) => {
    const { tittle, content, date, author } = req.body;
    const newNote = new Note({
        tittle: tittle,
        content: content,
        date: date,
        author: author
    })
    await newNote.save();
    res.json({message: 'Note Saved'})
};
 
notesCroller.updateNote = async (req, res) => {
    const {tittle, content, author} = req.body
    await Note.findByIdAndUpdate(req.params.id,{
        tittle: tittle,
        content: content,
        author: author
    })
    console.log(req.params.id, req.body)
    res.json({message: 'Note Updated'})
}

notesCroller.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.json(note)
}

notesCroller.deleteNote = async (req, res) => {
     const noteDelete = await Note.findByIdAndDelete(req.params.id)
    res.json({message: 'Note Delete'})
}

module.exports = notesCroller;