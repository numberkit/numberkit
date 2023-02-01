import { describe, expect, it } from "vitest";

import { multiplyAll } from "../../src";

describe("multiplyAll", () => {
  it("should return the product of all numbers in the array", () => {
    expect(multiplyAll([2, 3, 4])).toEqual(24);
    expect(multiplyAll([-2, -3, 4])).toEqual(24);
    expect(multiplyAll([1, 2, 3, 4, 5])).toEqual(120);
  });

  it("should return NaN if the array is empty", () => {
    expect(isNaN(multiplyAll([]))).toBe(true);
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => multiplyAll([2, 3, "4" as unknown as number])).toThrowError(
      "All elements in the array must be numbers"
    );
  });
});
