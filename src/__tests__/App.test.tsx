import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import { cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    const root = createRoot(div!);
    root.render(
      <Router>
        <App />
      </Router>
    );
  });
});
