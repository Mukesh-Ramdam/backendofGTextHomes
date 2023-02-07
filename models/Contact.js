const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    number:{
        type: Number,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    
    
})

module.exports = mongoose.models.Contact || mongoose.model('Contact', contactSchema)