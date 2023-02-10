import { NKError } from "../errors";

/**
 * Multiplies all numbers in an array together.
 *
 * @param {number[]} numbers - The numbers to be multiplied.
 * @throws {Error} If any element in the `numbers` array is not a number.
 * @return {number} The product of all numbers in the array, or NaN if the array is empty.
 */
export function multiplyAll(numbers: number[]): number {
  if (numbers.length === 0) return NaN;

  if (!numbers.every((n) => typeof n === "number")) {
    throw new Error(NKError.ARRAY_CONTAINS_NAN_VALUES);
  }

  return numbers.reduce((product, n) => product * n, 1);
}
