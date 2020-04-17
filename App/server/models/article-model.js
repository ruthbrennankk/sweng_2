const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Article = new Schema(
    {
        name: {type: String, required: true},
        //Id of Author Account,
        author: { type: String, required: true },
        date: {type: String, required: true},
        articleId: {type: Number, required: true},
        views: {type: Number, required: true},
        pointValue: {type: Number, required: true},
        //From index 0 to 2 , Yes, No , Partial respectively
        responseToImpact: {type: [Number], required: true},
        // yesImpactUserIds: {type: [Number], required: true},
        // noImpactUserIds: {type: [Number], required: true},
        // partialImpactUserIds: {type: [Number], required: true},
        tags: {type: [String], required: false},

        //Votes
        upVotes: {type: Number, required: true},
        downVotes: {type: Number, required: true},
       //Unrecorded
        unrecordedVotes: {type: Number, required: true},
        unrecordedRelevance: {type: Number, required: true},
        unrecordedImpact: {type: Number, required: true},
        numberOfFeedbackComments: {type: Number, required: true},

        
    }
    
)

module.exports = mongoose.model('articles', Article)
