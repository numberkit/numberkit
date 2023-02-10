import { NKError } from "../errors";

/**
 * Divides one number by another.
 *
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @throws {Error} If either `dividend` or `divisor` is not a number.
 * @throws {Error} If `divisor` is 0.
 * @return {number} The result of dividing `dividend` by `divisor`.
 */
export function divide(dividend: number, divisor: number): number {
  if (typeof dividend !== "number" || typeof divisor !== "number") {
    const errorMessage = NKError.BOTH_PARAMS_NAN_VALUES;
    const errorMessageWithValues = errorMessage
      .replace("{value1}", "dividend")
      .replace("{value2}", "divisor");

    throw new Error(errorMessageWithValues);
  }

  if (divisor === 0) {
    throw new Error(NKError.ZERO_DIVISOR);
  }

  return dividend / divisor;
}
