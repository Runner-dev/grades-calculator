import { expect } from "chai";

import calculateMissingRequiredGrade from "./calculateMissingRequiredGrade";

describe("calculateMissingRequiredGrade.ts", () => {
  it("Calculates Negative Missing Grade Correctly", () => {
    const output = calculateMissingRequiredGrade([
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

    expect(output).equal(-1.12);
  });

  it("Calculates Positive Missing Grade Correctly", () => {
    const output = calculateMissingRequiredGrade([
      {
        value: 2,
        weight: 10,
      },
      {
        value: undefined,
        weight: 13,
      },
      {
        value: 5,
        weight: 22,
      },
      {
        value: 2.3,
        weight: 25,
      },
      {
        value: 3.2,
        weight: 30,
      },
    ]);

    expect(output).equal(14.81);
  });

  it("Calculates No Missing Grade Correctly", () => {
    const output = calculateMissingRequiredGrade([
      {
        value: 5.95,
        weight: 10,
      },
      {
        value: undefined,
        weight: 20,
      },
      {
        value: 5.95,
        weight: 25,
      },
      {
        value: 5.95,
        weight: 15,
      },
      {
        value: 5.95,
        weight: 30,
      },
    ]);

    expect(output).equal(0);
  });
});
