import { expect } from "chai";

import calculateAverage from "./calculateAverage";

describe("calculateAverage.ts", () => {
  it("Calculates Average Correctly", () => {
    const output = calculateAverage([
      {
        value: 2,
        weight: 10,
      },
      {
        value: undefined,
        weight: 13,
      },
      {
        value: 8,
        weight: 22,
      },
      {
        value: 2.3,
        weight: 25,
      },
      {
        value: 7.9,
        weight: 30,
      },
    ]);

    expect(output).equal(5);
  });
});
