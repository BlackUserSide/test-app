import React, { useContext, useEffect, useRef, useState } from "react";
import { MainDataContext } from "../../context/MainDataContext";
import "./chatpage.sass";
import { FormMessage } from "./FormMessage/FormMessage";
import { ItemChat } from "./ItenChat/ItemChat";
export const ChatPage = () => {
  const [dataMessages, setDataMessages] = useState([]);
  const messageEnd = useRef(null);
  const { dataMessage } = useContext(MainDataContext);
  useEffect(() => {
    setDataMessages(dataMessage);
    scrollBottom();
  }, [dataMessage]);

  console.log(dataMessages, "data messages in chat room");
  const scrollBottom = () => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chat-page-wrapper">
      {dataMessage
        ? dataMessage.map((e, i) => <ItemChat content={e} key={i} />)
        : ""}
      <div ref={messageEnd}></div>
      <FormMessage />
    </div>
  );
};
