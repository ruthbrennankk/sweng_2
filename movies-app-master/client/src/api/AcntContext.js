import React, { useState } from 'react';


const AccountContext = React.createContext([{}, () => {}]);

const AccountProvider = (props) => {
const [state, setState] = useState({
     user : {
            rank: [0, 0, 0, 0],
            pointValue: [0, 0, 0, 0],
            articlesCreated: [0, 0],
            articlesViewed: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            articleViews: [0, 0, 0, 0],
            articlesLikes: [0, 0, 0],
            articleRelevanceRec: [0, 0, 0],
            articlesImpactRatingRec: [0, 0, 0],
            myArticlesLikes: [0, 0, 0],
            myArticlesImpactRec: [0],
            name: "Admin",
            position: "Software Dev",
            email: "testing@test.com",
            password: "admin",
            isManagement: false
    
        }
});
    return (
        <AccountContext.Provider value={[state, setState]}>
            {props.children}

        </AccountContext.Provider>
    );

}

 export { AccountContext, AccountProvider};