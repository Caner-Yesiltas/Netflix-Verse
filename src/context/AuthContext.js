"use client";
import { toastErrorNotify, toastSuccessNotify } from '@/helpers/ToastNotify';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '@/auth/firebase';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(() => {
        return JSON.parse(sessionStorage.getItem("user")) || false;
      });
       

      useEffect(() => {
        userObserver();
      }, []);

    const createUser = async (email, password) =>{
        try {
          let userCredential =  await createUserWithEmailAndPassword(auth, email, password)
          await updateProfile(auth.currentUser, {
            displayName: "Caner Yesiltas", photoURL: "https://pin.it/7F1sMWqUB"
          })
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

      const userObserver = () =>{
        onAuthStateChanged(auth, (currentUser) => {
        if(currentUser){
            const {email, displayname,photoURL} = currentUser;
            setCurrentUser({email, displayname,photoURL});
            sessionStorage.setItem('user', JSON.stringify({email, displayname,photoURL}));
        } else{
            setCurrentUser(false);
            sessionStorage.removeItem('user');
        }
      })
    }

    const googleProvider = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
  .then((result) => {
   toastSuccessNotify("User signed in successfully")
  }).catch((error) => {
    toastErrorNotify(error.message)
  });
    }

    const forgotPassword = (email) =>{
        sendPasswordResetEmail(auth, email)
  .then(() => {
    toastSuccessNotify("Password reset email sent")
  })
  .catch((error) => {
  toastErrorNotify(error.message)
  });
    }


const values = {currentUser, createUser, signIn, logOut, googleProvider, forgotPassword}
  return (
    <AuthContext.Provider value={values} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
