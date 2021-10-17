import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import CartContext from "./context/CartContext";

import Toast from "./components/toast";
ReactDOM.render(
  <React.StrictMode>
    <CartContext>
      <Toast />
      <App />
    </CartContext>
  </React.StrictMode>,
  document.getElementById("root")
);
