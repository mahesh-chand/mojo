const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
    firstname: {
        type: String,
        required: [true,"First Name is required"],
        trim: true
    },
    lastname: {
        type: String,
        required: [true,"Last Name is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true,"Email is required"],
        trim: true,
    },
    address: {
        type: String,
        required: [true,"Address is required"],
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema)