import { describe, expect, it } from "vitest";

import { addAll } from "../../src";

describe("addAll", () => {
  it("should return the sum of all numbers in the array", () => {
    expect(addAll([2, 3, 4])).toEqual(9);
    expect(addAll([-2, -3, 4])).toEqual(-1);
    expect(addAll([1, 2, 3, 4, 5])).toEqual(15);
  });

  it("should return NaN if the array is empty", () => {
    expect(isNaN(addAll([]))).toBe(true);
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => addAll([2, 3, "4" as unknown as number])).toThrowError(
      "All elements in the array must be numbers"
    );
  });
});
