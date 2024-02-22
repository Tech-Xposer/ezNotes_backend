const mongoose = require('mongoose')
const notesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
            type:String,
            required:true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    },
    createdDate:{
        type:Date,
        default: Date.now
    },
    tags:[
        {type: String}
    ],
    favorite:{
        type:String,
        default:false
    }

})

module.exports = mongoose.model('notes', notesSchema)