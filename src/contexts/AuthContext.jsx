import React, { useContext } from 'react';
import { createContext } from 'react';
import { auth, googleAuth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignUp = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const value = { signUp, googleSignUp };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
