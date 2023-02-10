import { NKError } from "../errors";

/**
 * Divides all numbers in the array each other.
 *
 * @param {number[]} numbers - The numbers to be divided.
 * @throws {Error} If the `numbers` array is less than two numbers long.
 * @throws {Error} If the `numbers` array contains any non-number values.
 * @throws {Error} If the `numbers` array contains any zero values.
 * @return {number} The quotient of all numbers in the array.
 */
export function divideAll(numbers: number[]): number {
  if (numbers.length < 2) {
    throw new Error(NKError.ARRAY_LENGTH_LESS_THAN_TWO);
  }

  if (!numbers.every((n) => typeof n === "number")) {
    throw new Error(NKError.ARRAY_CONTAINS_NAN_VALUES);
  }

  if (numbers.some((n) => n === 0)) {
    throw new Error(NKError.ARRAY_CONTAINS_ZERO_VALUES);
  }

  let quotient = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    quotient /= numbers[i];
  }

  return quotient;
}
