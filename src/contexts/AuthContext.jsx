import React, { useContext } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
