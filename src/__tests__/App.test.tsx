import React from "react";
import App from "../App";
import { cleanup, render } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { afterEach, describe, it } from "vitest";

afterEach(cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });
});
