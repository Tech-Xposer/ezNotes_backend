const notesModel = require('../models/notesModel');
const mongoose = require('mongoose')
const createNote = async (req, res) => {
    try {
        const { title, content, tags, favorite } = req.body;
        const author = req.user.name
        const createdBy = req.user._id

        if (!title || !content || !tags) {
            return res.status(412).send({
                status: "FAILED",
                message: "all fields required!"
            })
        }
        const note = await notesModel.create({
            title,
            content,
            author,
            createdBy,
            tags,
            favorite
        })
        return res.status(201).send({
            status: "SUCCESS",
            message: "note created successfully",
            data: {
                title: note.title,
                content: note.content,
                author: note.author,
                tags: note.tags,
                favorite: note.favorite
            }
        })
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        })
    }
}

const viewNote = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send({
                status: "FAILED",
                message: "Invalid ID"
            });
        }

        const note = await notesModel.findById(_id);

        if (!note) {
            return res.status(404).send({
                status: "FAILED",
                message: "Note not found"
            });
        }

        return res.status(200).send({
            status: "SUCCESS",
            message: "Found successfully",
            data: {
                title: note.title,
                content: note.content,
                author: note.author,
                tags: note.tags,
                favorite: note.favorite,
                date: note.createdDate
            }
        });
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { _id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(404).send({
                status: "FAILED",
                message: "Invalid ID"
            });
        }
        const deletedNote = await notesModel.findByIdAndDelete(_id);
        if (!deletedNote) {
            return res.status(404).send({
                status: "FAILED",
                message: "Note not found"
            });
        }

        return res.status(200).send({
            status:'SUCCESS',
            message:'deleted successfully'
        });
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        });
    }
};

const updateNote = async (req, res) => {
    try {
        const { _id } = req.params;
        const { title, content, tags, favorite } = req.body;

        // Validate if _id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).send({
                status: "FAILED",
                message: "Invalid ID"
            });
        }

        // Update the note in the database
        const updatedNote = await notesModel.findByIdAndUpdate(_id, {
            title, content, tags, favorite
        }, { new: true });

        // Check if note with given _id exists
        if (!updatedNote) {
            return res.status(404).send({
                status: "FAILED",
                message: "Note not found"
            });
        }

        // Return the updated note data
        return res.status(200).send({
            status: "SUCCESS",
            message: "Updated successfully",
            data: updatedNote
        });
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        });
    }
};

const getAllNotes = async (req, res) => {
    try {
        console.log('getAllNotes API');
        const _id = req.user._id;
        const notes = await notesModel.find({ createdBy: _id })
        if (notes.length === 0) {
            return res.status(404).send({
                status: "NOT_FOUND",
                message: "No notes found for the user"
            });
        }
        return res.status(200).send({
            status: "SUCCESS",
            message: "notes found successfully",
            total_notes: notes.length,
            notes: notes

        })
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        })
    }
}

const searchNotes = async (req, res) => {
    try {
        const { query } = req.query
        const notesData = await notesModel.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { content: { $regex: query, $options: "i" } },
                { tags: { $regex: query, $options: "i" } }
            ]
        })
        if (notesData.length === 0) {
            return res.status(404).send({
                status: "NOT_FOUND",
                message: "No notes found matching the search query"
            });
        }

        return res.status(200).send({
            status: "SUCCESS",
            message: "notes found successfully",
            total_notes: notesData.length,
            data: notesData
        })
    } catch (error) {
        return res.status(500).send({
            status: "FAILED",
            message: error.message
        })
    }
}

const makeFavorite = async (req, res) => {
    try {
        const { _id } = req.params
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).send({
                status: "FAILED",
                message: "invalid id!"
            })
        }
        const updatedNote = await notesModel.findByIdAndUpdate(_id, { favorite: true })
        if (!updatedNote) {
            return res.status(404).send({
                status: "FAILED",
                message: "not found!"
            })
        } else {
            res.status(200).send({
                status: "SUCCESS",
                message: "add to favorites successfully"
            })
        }
    } catch (error) {
        return res.status(500).send({
            status:"FAILED",
            message:error.message
        })
    }
}
const getfavoriteNotes = async (req,res)=>{
    try {
        const favoriteNotes = await notesModel.find({createdBy:req.user._id, favorite:true})
        if(favoriteNotes.length>0){
            return res.status(200).send({
                status:"SUCCESS",
                total_notes:favoriteNotes.length,
                data:favoriteNotes
            })
        }
        return res.status(404).send({
            status:"FAILED",
            message:"no favorite notes found"
        })
    } catch (error) {
        return res.status(500).send({
            status:"FAILED",
            message:error.message
        })
    }
}
module.exports = { createNote, viewNote, deleteNote, updateNote, getAllNotes, searchNotes ,makeFavorite, getfavoriteNotes}