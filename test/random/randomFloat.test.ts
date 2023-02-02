import { describe, expect, it } from "vitest";

import { randomFloat } from "../../src/random";

describe("randomFloat", () => {
  it("throws an error if either `min` or `max` is not a number", () => {
    expect(() =>
      randomFloat("not a number" as unknown as number, 5)
    ).toThrowError("Both minimum and maximum values must be numbers");

    expect(() =>
      randomFloat(5, "not a number" as unknown as number)
    ).toThrowError("Both minimum and maximum values must be numbers");
  });

  it("throws an error if `min` is greater than than or equal to `max`", () => {
    expect(() => randomFloat(5, 3)).toThrowError(
      "Minimum value must be less than maximum value"
    );
  });

  it("returns a random float between `min` and `max`", () => {
    const result = randomFloat(1, 5);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  });
});
