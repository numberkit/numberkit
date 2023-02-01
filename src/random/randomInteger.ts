/**
 * Returns a random integer between `min` and `max`.
 *
 * @param {number} min - The minimum possible value.
 * @param {number} max - The maximum possible value.
 * @throws {Error} If either `min` or `max` is not a number.
 * @throws {Error} If `min` is greater than `max`.
 * @return {number} A random integer between `min` and `max`.
 */
export function randomInteger(min: number, max: number): number {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both minimum and maximum values must be numbers");
  }

  if (min > max) {
    throw new Error(
      "Minimum value must be less than or equal to maximum value"
    );
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
