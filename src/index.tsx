import { render } from "react-dom";
import { Provider } from "react-redux";
import { Store } from "./stores";
import App from "./components/App";

const rootElement = document.getElementById("root");
render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
