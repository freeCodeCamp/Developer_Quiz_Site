import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";

export const MainApp: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quizzes/*" element={<App />} />
    </Routes>
  );
};

const router = createHashRouter([{ path: "*", Component: MainApp }]);
const root = document.getElementById("root");

createRoot(root || document.createElement("div")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
