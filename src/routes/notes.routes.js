const { Router } = require('express')
const router = Router()

const { renderNoteform, createNewNote, renderNotes, renderEditForm, updateNote, deletenote} = require('../controllers/notes.controller');

// New Note
router.get('/notes/add', renderNoteform)

router.post('/notes/new-note', createNewNote);

// Get All Note
router.get('/notes', renderNotes)

// Edit Notes
router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit/:id', updateNote)

// Delete Note
router.delete('/notes/delete/:id', deletenote)


module.exports = router