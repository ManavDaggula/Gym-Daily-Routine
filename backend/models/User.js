const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    timeStamp:{
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("users", userSchema);
User.createIndexes();
module.exports = User;