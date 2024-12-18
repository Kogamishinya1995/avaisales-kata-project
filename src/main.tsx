/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/default */
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./tailwind.css";
import "./style.scss";
import store from "./slices/index";

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
