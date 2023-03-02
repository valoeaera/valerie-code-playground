//React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Images & Styles
import "./App.css";
import "./index.css";

const add = (num1: number, num2: number) => {
  return num1 + num2;
};

const App = () => {
  const number1 = 5;
  const number2 = 10;
  return <h2>{add(number1, number2)}</h2>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
