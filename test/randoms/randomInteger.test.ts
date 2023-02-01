import { describe, expect, it } from "vitest";

import { randomInteger } from "../../src";

describe("randomInteger", () => {
  it("throws an error if either `min` or `max` is not a number", () => {
    expect(() =>
      randomInteger("not a number" as unknown as number, 5)
    ).toThrowError("Both minimum and maximum values must be numbers");

    expect(() =>
      randomInteger(5, "not a number" as unknown as number)
    ).toThrowError("Both minimum and maximum values must be numbers");
  });

  it("throws an error if `min` is greater than `max`", () => {
    expect(() => randomInteger(5, 3)).toThrowError(
      "Minimum value must be less than or equal to maximum value"
    );
  });

  it("returns a random integer between `min` and `max`", () => {
    const result = randomInteger(1, 5);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);
  });
});
