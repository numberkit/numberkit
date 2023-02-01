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
    throw new Error("Both parameters must be numbers");
  }

  return minuend - subtrahend;
}
