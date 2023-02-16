const mongoose = require('mongoose');
const leadSchema = new mongoose.Schema({
    status:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    
    phone:{
        type: Number,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    interest:{
        type: String,
        required:true
    },
    source:{
        type: String,
        required:true
    },
    date:{
        type: Date
    },
    remarks:{
        type: String,
        required:true
    },
    
    
})

module.exports = mongoose.models.Lead || mongoose.model('Lead', leadSchema)