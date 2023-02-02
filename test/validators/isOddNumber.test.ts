import { describe, expect, it } from "vitest";

import { isOddNumber } from "../../src/validators";
import { NAN_VALUE_ERROR } from "../../src/validators/_constants";

describe("isOddNumber", () => {
  it("returns true if the value is not an even number", () => {
    expect(isOddNumber(1)).toBe(true);
    expect(isOddNumber(3)).toBe(true);
    expect(isOddNumber(5)).toBe(true);
  });

  it("returns false if the value is an even number", () => {
    expect(isOddNumber(2)).toBe(false);
    expect(isOddNumber(4)).toBe(false);
    expect(isOddNumber(6)).toBe(false);
  });

  it("returns false if the value is not a number", () => {
    expect(isOddNumber(NaN)).toBe(false);
    expect(isOddNumber(Infinity)).toBe(false);
    expect(isOddNumber(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() => isOddNumber("not a number" as unknown as number)).toThrowError(
      NAN_VALUE_ERROR
    );
  });
});
