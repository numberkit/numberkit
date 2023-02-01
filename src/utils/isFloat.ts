/**
 * Determines whether the given `value` is a floating-point number.
 *
 * @param {number} value - The value to be checked.
 * @return {boolean} Indicates if the `value` is a floating-point number.
 */
export function isFloat(value: number): boolean {
  return typeof value === "number" && value % 1 !== 0;
}
