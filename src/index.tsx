import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";

const router = createHashRouter([{ path: "*", Component: Root }]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
