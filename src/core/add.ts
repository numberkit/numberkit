import { NKError } from "../errors";

/**
 * Adds two numbers.
 *
 * @param {number} augend - The first number in an addition.
 * @param {number} addend - The second number in an addition.
 * @throws {Error} If either `augend` or `addend` is not a number.
 * @return {number} The sum of the two numbers.
 */
export function add(augend: number, addend: number): number {
  if (typeof augend !== "number" || typeof addend !== "number") {
    const errorMessage = NKError.BOTH_PARAMS_NAN_VALUES;
    const errorMessageWithValues = errorMessage
      .replace("{value1}", "augend")
      .replace("{value2}", "addend");

    throw new Error(errorMessageWithValues);
  }

  return augend + addend;
}
