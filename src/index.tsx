import React from "react";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Main from "./Main";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createHashRouter } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/quizzes/*" element={<Main />} />
    </Routes>
  );
};

const router = createHashRouter([{ path: "*", Component: App }]);
const root = document.getElementById("root");

createRoot(root || document.createElement("div")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
