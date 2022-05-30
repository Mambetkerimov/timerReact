import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import { Context, initialContextValue } from "./context";
import App from "./App";

function Main() {
  const [context, setContext] = useState(initialContextValue);

  return (
    <React.StrictMode>
      <Context.Provider value={{ context, setContext }}>
        <App />
      </Context.Provider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Main />);

reportWebVitals();
