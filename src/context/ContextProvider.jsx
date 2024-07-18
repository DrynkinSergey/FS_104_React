import { createContext, useState } from 'react';

export const authContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };
  return <authContext.Provider value={contextValue}>{children}</authContext.Provider>;
};
