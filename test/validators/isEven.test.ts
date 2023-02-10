import { describe, expect, it } from "vitest";

import { NAN_VALUE_ERROR } from "../../src/validators/_constants";
import { isEven } from "../../src/validators/isEven";

describe("isEven", () => {
  it("returns true if the value is an even number", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(6)).toBe(true);
  });

  it("returns false if the value is not an even number", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
  });

  it("returns false if the value is not a finite number", () => {
    expect(isEven(NaN)).toBe(false);
    expect(isEven(Infinity)).toBe(false);
    expect(isEven(-Infinity)).toBe(false);
  });

  it("throws an error if the value is not a number", () => {
    expect(() => isEven("not a number" as unknown as number)).toThrowError(
      NAN_VALUE_ERROR
    );
  });
});
