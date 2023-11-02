import React, { Children, createContext } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const signIn = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (name,image)=>{
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
  }

  const authInfo ={
    signIn,
    updateUser
  };

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
