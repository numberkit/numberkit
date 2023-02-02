import { describe, expect, it } from "vitest";

import { isFloat } from "../../src/validators";
import { NAN_VALUE_ERROR } from "../../src/validators/_constants";

describe("isFloat", () => {
  it("returns true for a floating-point number", () => {
    expect(isFloat(0.1)).toBe(true);
    expect(isFloat(-0.1)).toBe(true);
  });

  it("returns false for an integer", () => {
    expect(isFloat(1)).toBe(false);
    expect(isFloat(-1)).toBe(false);
  });

  it("returns false if the value is not a finite number", () => {
    expect(isFloat(NaN)).toBe(false);
    expect(isFloat(Infinity)).toBe(false);
    expect(isFloat(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() => isFloat("not a number" as unknown as number)).toThrowError(
      NAN_VALUE_ERROR
    );
  });
});
