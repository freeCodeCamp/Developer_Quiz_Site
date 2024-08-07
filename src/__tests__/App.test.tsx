import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import { cleanup } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { afterEach, describe, it } from "vitest";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = createRoot(div!);
    root.render(
      <Router>
        <App />
      </Router>
    );
  });
});
