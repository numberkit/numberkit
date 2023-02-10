import { describe, expect, it } from "vitest";

import { addAll } from "../../src/core";

describe("addAll", () => {
  it("should return the sum of all numbers in the array", () => {
    expect(addAll([2, 3, 4])).toEqual(9);
    expect(addAll([-2, -3, 4])).toEqual(-1);
    expect(addAll([1, 2, 3, 4, 5])).toEqual(15);
  });

  it("should throw an error if the array is less than two numbers long", () => {
    expect(() => addAll([])).toThrowError(
      "The array must contain at least two numbers"
    );

    expect(() => addAll([1])).toThrowError(
      "The array must contain at least two numbers"
    );
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => addAll([2, 3, "4" as unknown as number])).toThrowError(
      "The array must contain only numbers"
    );
  });
});
