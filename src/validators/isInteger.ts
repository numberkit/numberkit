/**
 * Determines whether the given `value` is an integer.
 *
 * @param {number} value - The value to be checked.
 * @return {boolean} Indicates if the `value` is an integer.
 */
export function isInteger(value: number): boolean {
  return typeof value === "number" && value % 1 === 0;
}
