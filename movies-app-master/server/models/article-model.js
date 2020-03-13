const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        name: {type: String, required: true},
        author: { type: String, required: true },
        views: {type: Number, required: true},
        pointValue: {type: Number, required: true},
        responseToImpact: {type: [Number], required: true},
        tags: {type: [String], required: false},
        upVotes: {type: Number, required: true},
        downVotes: {type: Number, required: true},
        numberOfFeedbackComments: {type: Number, required: true},

        
    }
    
)

module.exports = mongoose.model('articles', Article)
