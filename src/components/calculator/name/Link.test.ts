import { render } from "@testing-library/svelte";
import { expect } from "chai";

import Link from "./Link.svelte";

describe("<Link>", () => {
  const grade = {
    url: "url",
    name: "test",
  };

  const { queryByText, getByTestId } = render(Link, {
    props: {
      grade,
    },
  });

  const link = getByTestId("link") as HTMLAnchorElement;

  it("Displays name", () => {
    expect(queryByText(grade.name)).not.equal(null);
  });

  it("Does not display url", () => {
    expect(queryByText(grade.url)).equal(null);
  });

  it("Links to url", () => {
    expect(link.href).contains(grade.url);
  });

  it("Does not link to name", () => {
    expect(link.href).not.contains(grade.name);
  });
});
