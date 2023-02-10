import { NKError } from "../errors";

/**
 * Divides two numbers.
 *
 * @param {number} dividend - The first number in a division.
 * @param {number} divisor - The second number in a division.
 * @throws {Error} If either `dividend` or `divisor` is not a number.
 * @throws {Error} If `divisor` is zero.
 * @return {number} The quotient of the two numbers.
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
