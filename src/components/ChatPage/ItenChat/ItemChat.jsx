import React, { useContext, useEffect, useState } from "react";
import { MainDataContext } from "../../../context/MainDataContext";

export const ItemChat = ({ content }) => {
  const { dataUser } = useContext(MainDataContext);
  const [messageUser, setMessageUser] = useState(false);
  useEffect(() => {
    if (dataUser === content.nameUser) {
      setMessageUser(true);
      return;
    }
    return;
  }, [dataUser, content.nameUser]);
  return (
    <div className={`item-chat-content ${messageUser ? "active-user" : ""}`}>
      <div className="item-collection-chat">
        <div className="avatar-wrapper">
          <span>{content.nameUser?.charAt(0)}</span>
        </div>
        <div className="message-chat-wrapper">
          <div className="name-wrapper">
            <p>{content.nameUser}</p>
          </div>
          <div className="message-wrapper">
            <p>{content.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
