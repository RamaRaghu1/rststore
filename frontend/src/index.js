import { render } from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./store.js";
import App from "./App.js";

render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.querySelector("#root")
);
