import React, {createContext, useState} from 'react'
const userContext = createContext()

const UserContextProvider = (props) => {
     const [user, setUser] = useState({
          role: 'admin'
     })

     const updateUser = (userData) => {
          setUser(prev => userData)
     }


     return (
          <userContext.Provider value = {{user: user, updateUser: updateUser}}>
               {props.children}
          </userContext.Provider>
     )
}

export {UserContextProvider, userContext}
