import React from "react";
import Selectable from "../components/Selectable";

import { render, cleanup } from "@testing-library/react";
import { vi } from "vitest";
import { expect, afterEach, describe, it } from "vitest";

afterEach(cleanup);
describe("Selectable", () => {
  it("Displays the passed options", () => {
    const ops = ["one", "two", "three"];
    const { getByLabelText } = render(
      <Selectable options={ops} groupName="someGroup" onChange={vi.fn()} />
    );
    expect(getByLabelText("one").textContent).toBeDefined();
    expect(getByLabelText("two").textContent).toBeDefined();
    expect(getByLabelText("three").textContent).toBeDefined();
  });
});
