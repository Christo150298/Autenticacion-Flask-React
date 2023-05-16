import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchLogin } from "./Fetch";
import { fetchPrivate } from "./Fetch";
import { fetchSingup } from "./Fetch";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [loginMail, setLoginMail] = useState();
  const [loginPass, setLoginPass] = useState();
  const [privateData, setPrivateData] = useState();

  const handleChangeLoginMail = (event) => setLoginMail(event.target.value);
  const handleChangeLoginPass = (event) => setLoginPass(event.target.value);
  const handleLoginButton = () => fetchLogin(loginMail, loginPass);
  const handlePrivateInfo = (handleOk) => fetchPrivate(handleOk);
  const handlePrivateData = (newData) => setPrivateData(newData);
  const handleSingupButton = () => {fetchSignup(loginMail, loginPass)};
  const handleLogoff = () => localStorage.removeItem("token");

  const store = { loginMail, loginPass ,privateData};
  const actions = {
    handleChangeLoginPass,
    handleChangeLoginMail,
    handleLoginButton,
    handlePrivateInfo,
    handlePrivateData,
    handleSingupButton,
    handleLogoff
  };

  return (
    <Context.Provider value={{ store, actions }}>{children}</Context.Provider>
  );
};

const useAppContext = () => useContext(Context);

export default useAppContext;