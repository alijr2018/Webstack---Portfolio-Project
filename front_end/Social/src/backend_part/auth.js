import { useState, useContext, createContext } from 'react';

const Auth = createContext();

export const AuthPro = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userParam) => {
    setUser(userParam);
  };
  const logout = () => {
    setUser(null);
  };

  return (
        <Auth.Provider value={{ user, login, logout }}>
            {children}
        </Auth.Provider>
  );
};

export const useAuth = () => {
  return useContext(Auth);
};
