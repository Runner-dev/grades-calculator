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
  it("Rounds down until .75", () => {
    const output = mobileRound(3.7499999);

    expect(output).equal(3.5);
  });
  it("Rounds down until .25", () => {
    const output = mobileRound(4.2499999);

    expect(output).equal(4);
  });
  it("Rounds up after .75", () => {
    const output = mobileRound(3.75);

    expect(output).equal(4);
  });
  it("Rounds up after .25", () => {
    const output = mobileRound(4.25);

    expect(output).equal(4.5);
  });
});
