import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { HashRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
