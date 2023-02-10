import { describe, expect, it } from "vitest";

import { subtractAll } from "../../src/core";

describe("subtractAll", () => {
  it("should return the difference of all numbers in the array", () => {
    expect(subtractAll([2, 3, 4])).toEqual(-5);
    expect(subtractAll([-2, -3, 4])).toEqual(-3);
    expect(subtractAll([1, 2, 3, 4, 5])).toEqual(-13);
  });

  it("should throw an error if the array is less than two numbers long", () => {
    expect(() => subtractAll([])).toThrowError(
      "The array must contain at least two numbers"
    );

    expect(() => subtractAll([1])).toThrowError(
      "The array must contain at least two numbers"
    );
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => subtractAll([2, 3, "4" as unknown as number])).toThrowError(
      "The array must contain only numbers"
    );
  });
});
