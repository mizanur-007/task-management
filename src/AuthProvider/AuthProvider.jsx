import React, { Children, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const s = 9;

  const authInfo ={
    s
  };

  return (
  <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;
