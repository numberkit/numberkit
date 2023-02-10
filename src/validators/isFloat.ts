import { NKError } from "../errors";

/**
 * Determines whether the given `value` is a floating-point number.
 *
 * @param {number} value - The value to be checked.
 * @throws {Error} If the `value` is not a number.
 * @return {boolean} Indicates if the `value` is a floating-point number.
 */
export function isFloat(value: number): boolean {
  if (typeof value !== "number") throw new Error(NKError.NAN_VALUE);

  return isFinite(value) && value % 1 !== 0;
}
