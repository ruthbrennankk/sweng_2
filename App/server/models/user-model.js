const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema(
    {
        name: {type: String, required: true},
        position: {type: String, required: true},
        email: { type: String, required: true },
        password: { type: String, required: true },
        isManagement: {type: Boolean, required: true},
        //rank over a 4 week period 
        rank: {type: [Number], required: true},
        //Point values over a 4 week period
        pointValue: {type: [Number], required: true},
         //contains the ids of all articles created use .length to get total articles viewed
        articlesCreated: {type: [Number], required:true},
        //contains the ids of all articles viewed use .length to get total articles viewed
        articlesViewed: {type: [Number], required: true},
        //Article Views over a 4 week period
        articleViews: {type: [Number], required: true},



        //Index 0 - Like , 1 - Dislike 2 UnrecordedExternal
        articlesLikes: {type: [Number], required: true},


        //Index 0 - Relevant, 1 - Irrevelant 2-Not Record External
        articleRelevanceRec: {type: [Number], required: true},

        //Index 0 - Yes, 1 - No, 2 - Partial External
        articlesImpactRatingRec: {type: [Number], required: true},

        

    //--------------------------------------------------------

        //Index 0 - Like , 1 - Dislike 2 - Unrecorded Internal
        myArticlesLikes: {type: [Number], required: true},

        //Index 0 - Relevant, 1 - Irrevelant 2-Unrecorded Internal
       // myArticleRelevanceRec: {type: [Number], required: true},

        //Index 0 - Yes, 1 - No, 2 - Partial, 3 - Not Recorded  Internal
        myArticlesImpactRatingRec: {type: [Number], required: true},
       

        


        
    }
    
)

module.exports = mongoose.model('users', User)
