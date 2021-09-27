import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../context/MainDataContext";
import { ChatPage } from "../ChatPage/ChatPage";
import { LoginMain } from "../LoginComponent/LoginMain";

import "./mainpage.sass";

export const MainPage = () => {
  const [loginUser, setLoginUser] = useState(false);
  const { dataUser } = useContext(MainDataContext);
  useEffect(() => {
    if (dataUser !== "") {
      setLoginUser(true);
      return;
    }
    return;
  }, [dataUser]);
  return (
    <div className="main-page-wrapper">
      {loginUser ? <ChatPage /> : <LoginMain />}
    </div>
  );
};
