import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
