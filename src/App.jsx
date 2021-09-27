import React from "react";

import { MainContext } from "./components/MainContext/MainContext";
import { MainPage } from "./components/MainPage/MainPage";
import "./main.sass";
export const App = () => {
  return (
    <div className="main-wrapper">
      <MainContext>
        <MainPage />
      </MainContext>
    </div>
  );
};
