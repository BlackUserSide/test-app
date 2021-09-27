import React, { useEffect, useState } from "react";
import { MainDataContext } from "../../context/MainDataContext";
import { addMessage } from "../function/addMessage";
import { updateMessage } from "../function/updateMessage";

export const MainContext = ({ children }) => {
  const [dataMessage, setDataMessage] = useState([]);
  const [nameUser, setNameUser] = useState("");
  useEffect(() => {
    const data = updateMessage();
    setDataMessage(data);
    window.addEventListener("storage", storageEventHandler, false);
  }, []);
  const storageEventHandler = () => {
    const data = updateMessage();
    setDataMessage(data);
  };
  const dataContext = {
    dataMessage: dataMessage,
    dataUser: nameUser,
    loginUser: (nameUser) => {
      if (nameUser !== "") {
        setNameUser(nameUser);
        return;
      }
      return "You did not enter a name";
    },
    submitMessage: (dataMessage) => {
      if (dataMessage && dataMessage.message !== "") {
        addMessage(dataMessage);
        const newData = updateMessage();
        setDataMessage(newData);
      }
      return;
    },
  };

  return (
    <MainDataContext.Provider value={dataContext}>
      {children}
    </MainDataContext.Provider>
  );
};
