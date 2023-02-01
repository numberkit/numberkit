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
    throw new Error("Both parameters must be numbers");
  }

  if (divisor === 0) {
    throw new Error("Cannot divide by zero");
  }

  return dividend / divisor;
}
