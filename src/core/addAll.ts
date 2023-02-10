import { NKError } from "../errors";

/**
 * Adds all numbers in an array together.
 *
 * @param {number[]} numbers - The numbers to be added.
 * @throws {Error} If any element in the `numbers` array is not a number.
 * @return {number} The sum of all numbers in the array, or NaN if the array is empty.
 */
export function addAll(numbers: number[]): number {
  if (numbers.length === 0) return NaN;

  if (!numbers.every((n) => typeof n === "number")) {
    throw new Error(NKError.ARRAY_CONTAINS_NAN_VALUES);
  }

  return numbers.reduce((sum, n) => sum + n, 0);
}
