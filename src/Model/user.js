const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
        trim : true,
    },
    email:{
        type: String,
        required : true,
        trim : true,
    },
    password:{
        type: String,
        required : true,
        trim : true,
    },
});

//collection 
const userdetails = new mongoose.model("users", userSchema)
module.exports = userdetails;