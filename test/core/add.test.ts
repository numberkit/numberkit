import { describe, expect, it } from "vitest";

import { add } from "../../src/core";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(-2, 3)).toBe(1);
  });

  it("throws an error if either augend or addend is not a number", () => {
    expect(() => add("2" as unknown as number, 3)).toThrowError(
      "Both augend and addend must be numbers"
    );

    expect(() => add(2, {} as unknown as number)).toThrowError(
      "Both augend and addend must be numbers"
    );
  });
});
