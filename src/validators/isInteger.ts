import { NAN_VALUE_ERROR } from "./_constants";

/**
 * Determines whether the given `value` is an integer.
 *
 * @param {number} value - The value to be checked.
 * @throws {Error} If the `value` is not a number.
 * @return {boolean} Indicates if the `value` is an integer.
 */
export function isInteger(value: number): boolean {
  if (typeof value !== "number") throw new Error(NAN_VALUE_ERROR);

  return isFinite(value) && value % 1 === 0;
}
