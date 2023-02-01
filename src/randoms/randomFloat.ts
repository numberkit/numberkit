/**
 * Returns a random float between `min` and `max`.
 *
 * @param {number} min - The minimum possible value.
 * @param {number} max - The maximum possible value.
 * @throws {Error} If either `min` or `max` is not a number.
 * @throws {Error} If `min` is greater than or equal to `max`.
 * @return {number} A random float between `min` and `max`.
 */
export function randomFloat(min: number, max: number): number {
  if (typeof min !== "number" || typeof max !== "number") {
    throw new Error("Both minimum and maximum values must be numbers");
  }

  if (min >= max) {
    throw new Error("Minimum value must be less than maximum value");
  }

  return Math.random() * (max - min) + min;
}
