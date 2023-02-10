import { describe, expect, it } from "vitest";

import { multiplyAll } from "../../src/core";

describe("multiplyAll", () => {
  it("should return the product of all numbers in the array", () => {
    expect(multiplyAll([2, 3, 4])).toEqual(24);
    expect(multiplyAll([-2, -3, 4])).toEqual(24);
    expect(multiplyAll([1, 2, 3, 4, 5])).toEqual(120);
  });

  it("should throw an error if the array is less than two numbers long", () => {
    expect(() => multiplyAll([])).toThrowError(
      "The array must contain at least two numbers"
    );

    expect(() => multiplyAll([1])).toThrowError(
      "The array must contain at least two numbers"
    );
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => multiplyAll([2, 3, "4" as unknown as number])).toThrowError(
      "The array must contain only numbers"
    );
  });
});
