import { describe, expect, it } from "vitest";

import { divide } from "../../src/core";

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(12, 4)).toEqual(3);
  });

  it("should throw an error if either parameter is not a number", () => {
    expect(() => divide(10, "2" as unknown as number)).toThrowError(
      "Both dividend and divisor must be numbers"
    );

    expect(() => divide("10" as unknown as number, 2)).toThrowError(
      "Both dividend and divisor must be numbers"
    );

    expect(() =>
      divide("10" as unknown as number, "2" as unknown as number)
    ).toThrowError("Both dividend and divisor must be numbers");
  });

  it("should throw an error if divisor is 0", () => {
    expect(() => divide(10, 0)).toThrowError("The divisor cannot be zero");
  });
});
