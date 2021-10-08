import React, { useState } from 'react';

const initAuthState = {
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
};

const AuthContext = React.createContext(initAuthState);

export const AuthProvider = ({children}) => {
  const token = localStorage.getItem('token') || '';
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const loginHandler = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  const contextValue = {
    token,
    isLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
