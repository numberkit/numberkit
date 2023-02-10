import { NKError } from "../errors";

/**
 * Subtracts one number from another.
 *
 * @param {number} minuend - The number from which `subtrahend` will be subtracted.
 * @param {number} subtrahend - The number to be subtracted from `minuend`.
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
