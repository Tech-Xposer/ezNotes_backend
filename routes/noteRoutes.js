const express = require('express')
const { createNote ,viewNote, deleteNote, updateNote, getAllNotes, searchNotes, makeFavorite, getfavoriteNotes} = require('../controllers/noteContoller')
const router = express.Router()

router.post('/newnote', createNote) //route to create a new note

router.get('/notes', getAllNotes) //route to get all notes createed by user

router.get('/search',searchNotes) // search notes with query

router.get('/favorites', getfavoriteNotes) //searcj for favorites notes

router.patch('/:id/favorite', makeFavorite) // make a note favorite

router.route('/:_id').get(viewNote).patch(updateNote).delete(deleteNote)

module.exports = router