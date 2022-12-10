const { default: mongoose } = require("mongoose");
const mongURI = "mongodb://localhost:27017/dailyroutine";

const connection = ()=>{
    mongoose.connect(mongURI, ()=>{
        console.log("Connected to Mongoose :)");
    })
}

module.exports = connection;