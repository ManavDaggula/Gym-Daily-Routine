import mongoose from 'mongoose';
const { Schema } = mongoose;

const routineSchema = new Schema({
    dayCount:{
        type: Number,
    },
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    timeStamp:{
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("routines", routineSchema);