import React from "react";
import ReactDOM from "react-dom";
import Component from "@reactions/component";

import "./styles.css";

function App() {
  return (
    <Component initialState={{ name: "Brown" }}>
      {({ state, setState }) => {
        return (
          <div>
            <label>
              Name :
              <input
                type="text"
                autocomplete="name"
                onInput={e => setState({ name: e.target.value })}
              />
            </label>
            <h1>Hello {state.name}</h1>
          </div>
        );
      }}
    </Component>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
