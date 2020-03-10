const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: {type: String, required: true},
        email: { type: String, required: true },
        password: { type: String, required: true },
        isManagement: {type: Boolean, required: true},
        rank: {type: Number, required: true},
        pointValue: {type: Number, required: true},

        
    }
    
)

module.exports = mongoose.model('users', User)
