import React, { useState } from 'react';


const AccountContext = React.createContext([{}, () => {}]);

const AccountProvider = (props) => {
const [state, setState] = useState({
     user : {
        name: "Lucy Byrne",
        position: "Junior Engineer",
        email: "Byrnel@tacit.com",
        password: "Pass",
        isManagement: false,
        rank: [1, 2,4,3],
        pointValue: [1000, 2100, 4100,3200],
        articlesCreated: [1,2],
        articlesViewed: [4,9,6,10,16,13,19,18,15],
        articleViews: [0,24,37,0],
        articlesLikes: [3,2,4],
        articleRelevanceRec: [3,1,5],
        articlesImpactRatingRec: [5,2,2],
        myArticlesLikes: [146,47,28],
        myArticlesImpactRec: [22,36,21],
    
        }
});
    return (
        <AccountContext.Provider value={[state, setState]}>
            {props.children}

        </AccountContext.Provider>
    );

}

 export { AccountContext, AccountProvider};