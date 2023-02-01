/**
 * Multiplies two numbers.
 *
 * @param {number} multiplier - The first number to be multiplied.
 * @param {number} multiplicand - The second number to be multiplied.
 * @throws {Error} If either `multiplier` or `multiplicand` is not a number.
 * @return {number} The product of the two numbers.
 */
export function multiply(multiplier: number, multiplicand: number): number {
  if (typeof multiplier !== "number" || typeof multiplicand !== "number") {
    throw new Error("Both parameters must be numbers");
  }

  return multiplier * multiplicand;
}
