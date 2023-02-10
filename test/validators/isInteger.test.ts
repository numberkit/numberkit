import { describe, expect, it } from "vitest";

import { NKError } from "../../src/errors";
import { isInteger } from "../../src/validators";

describe("isInteger", () => {
  it("returns true for an integer", () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(-1)).toBe(true);
  });

  it("returns false for a floating-point number", () => {
    expect(isInteger(1.1)).toBe(false);
    expect(isInteger(-1.1)).toBe(false);
  });

  it("returns false if the value is not a finite number", () => {
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() => isInteger("not a number" as unknown as number)).toThrowError(
      NKError.NAN_VALUE
    );
  });
});
