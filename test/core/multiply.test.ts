import { describe, expect, it } from "vitest";

import { multiply } from "../../src/core";

describe("multiply", () => {
  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it("throws an error if either augend or multiplyend is not a number", () => {
    expect(() => multiply("2" as unknown as number, 3)).toThrowError(
      "Both multiplier and multiplicand must be numbers"
    );

    expect(() => multiply(2, {} as unknown as number)).toThrowError(
      "Both multiplier and multiplicand must be numbers"
    );
  });
});
