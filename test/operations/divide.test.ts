import { describe, expect, it } from "vitest";

import { divide } from "../../src";

describe("divide", () => {
  it("should divide two numbers correctly", () => {
    expect(divide(10, 2)).toEqual(5);
    expect(divide(12, 4)).toEqual(3);
  });

  it("should throw an error if either parameter is not a number", () => {
    expect(() => divide(10, "2" as unknown as number)).toThrowError(
      "Both parameters must be numbers"
    );

    expect(() => divide("10" as unknown as number, 2)).toThrowError(
      "Both parameters must be numbers"
    );

    expect(() =>
      divide("10" as unknown as number, "2" as unknown as number)
    ).toThrowError("Both parameters must be numbers");
  });

  it("should throw an error if divisor is 0", () => {
    expect(() => divide(10, 0)).toThrowError("Cannot divide by zero");
  });
});
