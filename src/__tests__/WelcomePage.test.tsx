import React from "react";
import { createRoot } from "react-dom/client";
import WelcomePage from "../components/WelcomePage";
import { cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
afterEach(cleanup);

describe("Welcome Page", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = createRoot(div!);
    root.render(
      <Router>
        <WelcomePage />
      </Router>
    );
  });
});
