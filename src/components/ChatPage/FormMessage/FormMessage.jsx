import React, { useContext, useState } from "react";
import { MainDataContext } from "../../../context/MainDataContext";

export const FormMessage = () => {
  const [message, setMessage] = useState("");
  const { submitMessage, dataUser } = useContext(MainDataContext);
  const changeHandler = (e) => {
    const val = e?.currentTarget.value;
    setMessage(val);
  };
  const sumbitHandler = (e) => {
    e?.preventDefault();
    if (submitMessage && dataUser) {
      if (message !== "") {
        const dataMessage = {
          nameUser: dataUser,
          message: message,
        };
        submitMessage(dataMessage);
        setMessage("");
      }
      return;
    }
  };
  return (
    <form className="form-message" onSubmit={sumbitHandler}>
      <div className="input-wrapper">
        <input
          type="text"
          name="message"
          placeholder="Enter your message..."
          className="input-message"
          defaultValue={message}
          value={message}
          onChange={changeHandler}
        />
      </div>
      <button className="btn-message">Submit</button>
    </form>
  );
};
