import React, { useContext, useState } from "react";
import { MainDataContext } from "../../context/MainDataContext";
import "./login.sass";
export const LoginMain = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { loginUser } = useContext(MainDataContext);
  const changeHandler = (e) => {
    const val = e?.currentTarget.value;
    setName(val);
  };
  const submitHandler = (e) => {
    e?.preventDefault();
    if (loginUser) {
      if (name !== "") {
        loginUser(name);
        return;
      }
      setMessage("You did not enter a name");
    }
  };
  return (
    <div className="login-wrapper">
      <form className="main-login-form" onSubmit={submitHandler}>
        <div className="err-form-wrapper">
          {message !== "" ? <p className="active-error">{message}</p> : ""}
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            name="nameUser"
            placeholder="Enter your username..."
            className="input-login"
            onChange={changeHandler}
          />
        </div>
        <div className="btn-collection">
          <button className="btn-login" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
