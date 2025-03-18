import React, { createContext } from 'react'

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={values} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
