import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import App from "./App";

const router = createHashRouter([{ path: "*", Component: App }]);
const root = document.getElementById("root");

createRoot(root || document.createElement("div")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
