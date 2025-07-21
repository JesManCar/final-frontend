import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  console.log("user", Cookies.get('user'));
  console.log("token", Cookies.get('token'));
  const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null);
  const [token, setToken] = useState(Cookies.get('token') || null);
  const isAuthenticated = !!token;
  //const isAuthenticated = false;

  const login = (newToken, userData) => {
    Cookies.set('token', newToken, { expires: 1 }); // 1 día
    setToken(newToken);
    Cookies.set('user', JSON.stringify(userData), { expires: 1 }); // 1 día
    setUser(userData);
  };

  const logout = () => {
    Cookies.remove('token');
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    const saved = Cookies.get('token');
    const savedUser = Cookies.get('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    if (saved) setToken(saved);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
