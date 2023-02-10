import { NAN_VALUE_ERROR } from "./_constants";

/**
 * Determines if the value is an even number.
 * @param value - The value to be checked.
 * @throws {Error} If the value is not a number.
 * @returns Indicates if the `value` is an even number.
 */
export function isEven(value: number): boolean {
  if (typeof value !== "number") throw new Error(NAN_VALUE_ERROR);

  return isFinite(value) && value % 2 === 0;
}
