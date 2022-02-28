import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";


import App from './app';

import "./index.css";

reactDom.render(
  <BrowserRouter>
    <App />{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
