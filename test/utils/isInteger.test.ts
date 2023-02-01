import { describe, expect, it } from "vitest";

import { isInteger } from "../../src";

describe("isInteger", () => {
  it("returns true for an integer", () => {
    expect(isInteger(1)).toBe(true);
  });

  it("returns false for a floating-point number", () => {
    expect(isInteger(1.1)).toBe(false);
  });

  it("returns false for non-numeric input", () => {
    expect(isInteger("not a number" as unknown as number)).toBe(false);
  });
});
