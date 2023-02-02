import { describe, expect, it } from "vitest";

import { NAN_VALUE_ERROR } from "../../src/validators/_constants";
import { isEvenNumber } from "../../src/validators/isEvenNumber";

describe("isEvenNumber", () => {
  it("returns true if the value is an even number", () => {
    expect(isEvenNumber(2)).toBe(true);
    expect(isEvenNumber(4)).toBe(true);
    expect(isEvenNumber(6)).toBe(true);
  });

  it("returns false if the value is not an even number", () => {
    expect(isEvenNumber(1)).toBe(false);
    expect(isEvenNumber(3)).toBe(false);
    expect(isEvenNumber(5)).toBe(false);
  });

  it("returns false if the value is not a number", () => {
    expect(isEvenNumber(NaN)).toBe(false);
    expect(isEvenNumber(Infinity)).toBe(false);
    expect(isEvenNumber(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() =>
      isEvenNumber("not a number" as unknown as number)
    ).toThrowError(NAN_VALUE_ERROR);
  });
});
