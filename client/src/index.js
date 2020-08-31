import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter } from 'react-router-dom';
import "./i18n";
ReactDOM.render(
  // <React.StrictMode>
  <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </HashRouter>,
  // </React.StrictMode>
  document.getElementById("root")
);

serviceWorker.unregister();
