import React from 'react'

const UserContext = React.createContext('you got 0 rupees Check.')// default value.

 const UserProvider = UserContext.Provider;
 const UserConsumer = UserContext.Consumer;

 export {UserProvider, UserConsumer}