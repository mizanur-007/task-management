import React, { Children, createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");

    //create a user with email password
  const signIn = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //set users name and image 

  const updateUser = (name,image)=>{
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
      })
  }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          setUser(user);
        //   setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);

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
