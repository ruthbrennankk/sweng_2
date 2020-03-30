import React, { useState } from 'react';

import userModel from '..'

const AccountContext = React.createContext([{
    
}, 
() => {}]);

const AccountProvider = (props) => {
const [state, setState] = useState({});
    return (
        <AccountContext.Provider value={[state, setState]}>
            {props.children}

        </AccountContext.Provider>
    );

}

export { AccountContext, AccountProvider};