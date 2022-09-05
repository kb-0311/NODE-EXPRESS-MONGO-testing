const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required:[true , 'please input your name'],

    } ,
    email : {
        type : String,
        require : [true , 'please input your email']
    } ,
    password : {
        type :String,
        required:[true , 'please enter the password'],
    }
})

module.exports = mongoose.model("User" , userSchema);