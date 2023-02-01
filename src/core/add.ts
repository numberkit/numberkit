/**
 * Adds two numbers.
 *
 * @param {number} augend - The first number to be added.
 * @param {number} addend - The second number to be added.
 * @throws {Error} If either `augend` or `addend` is not a number.
 * @return {number} The sum of the two numbers.
 */
export function add(augend: number, addend: number): number {
  if (typeof augend !== "number" || typeof addend !== "number") {
    throw new Error("Both parameters must be numbers");
  }

  return augend + addend;
}
