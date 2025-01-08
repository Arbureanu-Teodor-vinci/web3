const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
   comment: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const bookSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    comments: [commentSchema],
})



commentSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})


bookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Book', bookSchema)