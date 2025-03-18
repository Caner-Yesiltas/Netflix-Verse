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
          let userCredential =  await createUserWithEmailAndPassword(auth, email, password)
          toastSuccessNotify("User created successfully")
        } catch (err) {
   toastErrorNotify(err.message)
        }
    }

    const signIn = async (email, password) =>{
        try {
          let userCredential =  await signInWithEmailAndPassword(auth, email, password)
          toastSuccessNotify("User signed in successfully")
        } catch (err) {
   toastErrorNotify(err.message)
        }
    }

    
    const logOut = async () => {
        try {
          await signOut(auth);
          toastSuccessNotify('Logged out successfully!');
        } catch (error) {
          toastErrorNotify('Logout failed: ' + error.message);
        }
      };

const values = {currentUser, createUser, signIn, logOut}
  return (
    <AuthContext.Provider value={values} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
