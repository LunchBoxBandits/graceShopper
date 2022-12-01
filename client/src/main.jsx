import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { StoreProvider } from "easy-peasy";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

     <StoreProvider store={store}>
    <BrowserRouter>
    
      <App />
   
    </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);