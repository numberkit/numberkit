import { NKError } from "../errors";

/**
 * Subtracts two numbers.
 *
 * @param {number} minuend - The first number in a subtraction.
 * @param {number} subtrahend - The second number in a subtraction.
 * @throws {Error} If either `minuend` or `subtrahend` is not a number.
 * @return {number} The difference between the two numbers.
 */
export function subtract(minuend: number, subtrahend: number): number {
  if (typeof minuend !== "number" || typeof subtrahend !== "number") {
    const errorMessage = NKError.BOTH_PARAMS_NAN_VALUES;
    const errorMessageWithValues = errorMessage
      .replace("{value1}", "minuend")
      .replace("{value2}", "subtrahend");

    throw new Error(errorMessageWithValues);
  }

  return minuend - subtrahend;
}
