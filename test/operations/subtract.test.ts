import { describe, expect, it } from "vitest";

import { subtract } from "../../src";

describe("subtract", () => {
  it("should subtract two numbers correctly", () => {
    expect(subtract(2, 3)).toBe(-1);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(-2, 3)).toBe(-5);
  });

  it("throws an error if either augend or subtractend is not a number", () => {
    expect(() => subtract("2" as unknown as number, 3)).toThrowError(
      "Both parameters must be numbers"
    );

    expect(() => subtract(2, {} as unknown as number)).toThrowError(
      "Both parameters must be numbers"
    );
  });
});
