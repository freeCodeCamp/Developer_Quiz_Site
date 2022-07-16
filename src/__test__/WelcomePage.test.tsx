import React from "react";
import ReactDOM from "react-dom";
import WelcomePage from "../components/WelcomePage";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("Welcome Page", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WelcomePage start={undefined} />, div);
  });
});
