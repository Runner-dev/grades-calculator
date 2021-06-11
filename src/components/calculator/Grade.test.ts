import { fireEvent } from "@testing-library/dom";
import { act, render } from "@testing-library/svelte";
import { expect } from "chai";
import assert from "assert";

import type { Grade as GradeType } from "../../types/grades";

import Grade from "./Grade.svelte";

interface dataType {
  grade: GradeType;
  editable: boolean;
  firstUrlGrade: number;
  missing: number;
  weightSum: number;
  index: number;
}

const baseData: dataType = Object.freeze({
  grade: Object.freeze({
    name: "name",
    value: 5,
    weight: 10,
    helper: "helper",
    url: "url",
  }),
  editable: true,
  firstUrlGrade: 1,
  weightSum: 95,
  missing: 4.95,
  index: 0,
});

describe("<Grade>", () => {
  let usableBaseData: dataType;

  beforeEach(() => (usableBaseData = JSON.parse(JSON.stringify(baseData))));

  it("Shows delete button if editable", () => {
    let { queryByTestId } = render(Grade, {
      ...usableBaseData,
      editable: true,
    });

    expect(queryByTestId("delete-button")).not.equal(null);
  });

  it("Doesn't show delete button if not editable", () => {
    let { queryByTestId } = render(Grade, {
      ...usableBaseData,
      editable: false,
    });

    expect(queryByTestId("delete-button")).equal(null);
  });

  it("Updates value when value is input", async () => {
    let { getByTestId } = render(Grade, {
      ...usableBaseData,
    });

    const valueInput = getByTestId("value-input");

    await act(() => fireEvent.input(valueInput, { target: { value: "3.14" } }));

    expect(usableBaseData.grade.value).equal(3.14);
  });

  it("Does not update other grade values when value is input", async () => {
    let { getByTestId } = render(Grade, {
      ...usableBaseData,
    });

    const valueInput = getByTestId("value-input");

    await act(() => fireEvent.input(valueInput, { target: { value: "3.14" } }));
    expect(
      assert.deepStrictEqual(
        { ...usableBaseData.grade, value: baseData.grade.value },
        baseData.grade
      )
    );
  });

  it('Displays "Peso (%)" as label when editable', () => {
    let { queryByText } = render(Grade, {
      ...usableBaseData,
      editable: true,
    });

    expect(queryByText("Peso (%)")).not.equal(null);
  });

  it('Displays "Peso" as label when not editable', () => {
    let { queryByText } = render(Grade, {
      ...usableBaseData,
      editable: false,
    });

    expect(queryByText("Peso")).not.equal(null);
  });

  it("Shows Only Editable Input When Editable", () => {
    let { queryByTestId } = render(Grade, {
      ...usableBaseData,
      editable: true,
    });

    expect(queryByTestId("editable-input")).not.equal(null);
    expect(queryByTestId("noteditable-input")).equal(null);
  });

  it("Shows Only Not Editable Input When Not Editable", () => {
    let { queryByTestId } = render(Grade, {
      ...usableBaseData,
      editable: false,
    });

    expect(queryByTestId("editable-input")).equal(null);
    expect(queryByTestId("noteditable-input")).not.equal(null);
  });
});
