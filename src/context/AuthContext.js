'use client';
import { toastErrorNotify, toastSuccessNotify } from '@/helpers/ToastNotify';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState, useContext } from 'react';
import { auth } from '@/auth/firebase';
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}; //* with custom hook

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName, photoURL) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      toastSuccessNotify('User created successfully');
      router.push('/profile');
     
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  const signIn = async (email, password) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      toastSuccessNotify('User signed in successfully');
    } catch (err) {
      toastErrorNotify(err.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      toastSuccessNotify('Logged out successfully!');
    } catch (error) {
      toastErrorNotify('Logout failed: ' + error.message);
    }
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const { email, displayName, photoURL } = currentUser;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          'user',
          JSON.stringify({ email, displayName, photoURL }),
        );
      } else {
        setCurrentUser(false);
        sessionStorage.removeItem('user');
      }
    });
  };

  const googleProvider = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        toastSuccessNotify('User signed in successfully');
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastSuccessNotify('Password reset email sent');
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };

  const values = {
    currentUser,
    createUser,
    signIn,
    logOut,
    googleProvider,
    forgotPassword,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
