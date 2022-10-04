/* eslint-disable @typescript-eslint/no-misused-promises */
import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CellList from "./components/CellList";
import { store } from "./state";

const App = () => {
  // Fixes Uncaught ReferenceError: process is not defined
  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);

  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
