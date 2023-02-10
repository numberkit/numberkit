import { describe, expect, it } from "vitest";

import { isOdd } from "../../src/validators";
import { NAN_VALUE_ERROR } from "../../src/validators/_constants";

describe("isOdd", () => {
  it("returns true if the value is not an even number", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  it("returns false if the value is an even number", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(-2)).toBe(false);
  });

  it("returns false if the value is not a number", () => {
    expect(isOdd(NaN)).toBe(false);
    expect(isOdd(Infinity)).toBe(false);
    expect(isOdd(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() => isOdd("not a number" as unknown as number)).toThrowError(
      NAN_VALUE_ERROR
    );
  });
});
