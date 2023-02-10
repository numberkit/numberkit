import { describe, expect, it } from "vitest";

import { divideAll } from "../../src/core";

describe("divideAll", () => {
  it("should return the quotient of all numbers in the array", () => {
    expect(divideAll([2, 3, 4])).toEqual(0.16666666666666666);
    expect(divideAll([-2, -3, 4])).toEqual(0.16666666666666666);
    expect(divideAll([1, 2, 3, 4, 5])).toEqual(0.008333333333333333);
  });

  it("should throw an error if the array is less than two numbers long", () => {
    expect(() => divideAll([])).toThrowError(
      "The array must contain at least two numbers"
    );

    expect(() => divideAll([1])).toThrowError(
      "The array must contain at least two numbers"
    );
  });

  it("should throw an error if any element in the array is not a number", () => {
    expect(() => divideAll([2, 3, "4" as unknown as number])).toThrowError(
      "The array must contain only numbers"
    );
  });

  it("should throw an error if any element in the array is zero", () => {
    expect(() => divideAll([2, 3, 0])).toThrowError(
      "The array must not contain any zero values"
    );
  });
});
