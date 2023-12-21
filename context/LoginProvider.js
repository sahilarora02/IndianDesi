import { createContext, useState, useContext, useLayoutEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const getAuth = async () => {
    const l = await AsyncStorage.getItem("auth");
    setIsLogin(l === "true");
  };

  useLayoutEffect(() => {
    getAuth();
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;
