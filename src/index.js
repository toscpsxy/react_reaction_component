import React from "react";
import ReactDOM from "react-dom";
import Component from "@reactions/component";

import "./styles.css";

function App() {
  return (
    <Component
      initialState={{ name: "Brown" }}
    >
      {({ state }) => {
        return (
          <h1>Hello {state.name}</h1>
        );
      }}
    </Component>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
