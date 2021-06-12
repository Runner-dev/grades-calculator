import { render } from "@testing-library/svelte";
import { expect } from "chai";

import Normal from "./Normal.svelte";

describe("<Normal>", () => {
  const grade = {
    name: "test",
  };

  const { queryByText, getByTestId } = render(Normal, {
    grade,
  });

  it("Displays name", () => {
    expect(queryByText(grade.name)).not.equal(null);
  });
});
