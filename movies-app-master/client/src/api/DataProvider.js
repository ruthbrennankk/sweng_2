import React from 'react';
import api from './index';
import {AccountContext} from './AcntContext';

//Get User Articles
function GetArticles(user){

}

//Get articles by a time filter
function FilterArticlesByTime(date, articles){

    return [articles];
}


//Get Articles Viewed by user
function ViewedArticles(){

}

//Get User Points
function GetRank(){

} 

//Get Total Article Views
function GetTotalViews(){

}

//Get Solution Rate
function GetSolutionRate(){

}

//Get Impact Rate
function GetImpactRate(){

}

//Get User rating on other articles
function GetRatings(user){
    



}

//Find which impact had the highest percentage for a time period using user rating and time filter^
function AverageImpact(date, user){

    var articles = GetArticles(user);
    var articlesWithinDates = FilterArticlesByTime(date, user);


}







