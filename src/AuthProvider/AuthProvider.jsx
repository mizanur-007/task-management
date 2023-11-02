import React, { Children, createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState("");

    //create a user with email password
  const signUp = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //signIn a user
  const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
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

      //logout
      const logOut =()=>{
        return signOut(auth)
      }

  const authInfo ={
    signUp,
    updateUser,
    user,
    logOut,
    signIn
  };

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
