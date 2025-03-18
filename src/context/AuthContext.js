"use client";
import { toastErrorNotify, toastSuccessNotify } from '@/helpers/ToastNotify';
import React, { createContext, useState } from 'react'


export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false);

    const createUser = async (email, password) =>{
        try {

          let userCredential =  await createUserWithEmailAndPassword( email, password)
          toastSuccessNotify("User created successfully")
          console.log(userCredential);

        } catch (err) {
   toastErrorNotify(err.message)
        }
    }

const values = {currentUser, createUser}
  return (
    <AuthContext.Provider value={values} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
