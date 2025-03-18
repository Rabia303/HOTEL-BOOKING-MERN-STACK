const mongoose = require('mongoose');

const userContactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true,
        unique:true
    },
})

const userContact = mongoose.model('userContact', userContactSchema)
module.exports = userContact