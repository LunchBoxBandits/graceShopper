import { StoreProvider } from "easy-peasy";
import {useStoreState, useStoreActions} from "easy-peasy";
import React from "react";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// function App() {

//   return (

//   )
// }

export default App;
