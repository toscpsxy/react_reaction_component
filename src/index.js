import React from "react";
import ReactDOM from "react-dom";
import Component from "@reactions/component";

import "./styles.css";

const myDidMount = async ({ state, setState, props, forceUpdate }) => {
  try {
    const rand = Math.random() * 10;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + parseInt(rand)
    );
    const json = await response.json();
    const name = json.name;
    console.log(json);
    setState({ name });
  } catch (error) {
    throw new Error("Did Mount Error");
  }
};

function App() {
  return (
    <Component initialState={{ name: "Brown" }} didMount={myDidMount}>
      {({ state, setState }) => {
        return (
          <div>
            <label>
              Name :
              <input
                type="text"
                autocomplete="name"
                value={state.name}
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
