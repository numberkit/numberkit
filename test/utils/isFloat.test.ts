import { describe, expect, it } from "vitest";

import { isFloat } from "../../src";

describe("isFloat", () => {
  it("returns true for a floating-point number", () => {
    expect(isFloat(0.1)).toBe(true);
  });

  it("returns false for an integer", () => {
    expect(isFloat(1)).toBe(false);
  });

  it("returns false for non-numeric input", () => {
    expect(isFloat("not a number" as unknown as number)).toBe(false);
  });
});
