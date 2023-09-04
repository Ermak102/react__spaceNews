import ReactDOM from "react-dom/client";
import "./index.scss";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import App from "./App";
import Navbar from "./components/UI/Navbar/Navbar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore}>
    {/* <RouterProvider router={router} />
    <App /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
