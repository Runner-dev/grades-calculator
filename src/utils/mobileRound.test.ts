import { expect } from "chai";

import mobileRound from "./mobileRound";

describe("mobileRound.ts", () => {
  it("Returns input when rounding integer", () => {
    const output = mobileRound(5);

    expect(output).equal(5);
  });
  it("Returns input when rounding .5", () => {
    const output = mobileRound(3.5);

    expect(output).equal(3.5);
  });
  it("Rounds down until .76", () => {
    const output = mobileRound(3.7555);

    expect(output).equal(3.5);
  });
  it("Rounds down until .26", () => {
    const output = mobileRound(4.2555);

    expect(output).equal(4);
  });
  it("Rounds up after .76", () => {
    const output = mobileRound(3.76);

    expect(output).equal(4);
  });
  it("Rounds up after .26", () => {
    const output = mobileRound(4.26);

    expect(output).equal(4.5);
  });
});
