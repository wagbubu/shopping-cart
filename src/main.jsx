import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App></App>
  </Provider>
);
