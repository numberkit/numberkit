import { NKError } from "../errors";

/**
 * Determines if the value is an odd number.
 * @param value - The value to be checked.
 * @throws {Error} If the value is not a number.
 * @returns Indicates if the `value` is an odd number.
 */
export function isOdd(value: number): boolean {
  if (typeof value !== "number") throw new Error(NKError.NAN_VALUE);

  return isFinite(value) && value % 2 !== 0;
}
