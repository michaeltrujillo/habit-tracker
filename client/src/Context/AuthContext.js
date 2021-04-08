import React, { createContext, useState, useEffect } from "react";
import AuthAPI from "../utils/AuthAPI";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthAPI.isAuthenticated().then((data) => {
      // console.log(data)
      setId(data.id);
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border m-7" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            id,
            setId
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};