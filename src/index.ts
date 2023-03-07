/**
 * create an n-digit random number
 * @param n number of digits
 * @example digity(5) // exp: 85850
 */
export const digity = (n: number) => {
  if (!Number.isInteger(n)) throw new Error('type of length must be integer');
  if (n <= 1) throw new Error('length of code cannot <= 1');

  const max = parseInt(`9${'9'.repeat(n - 1)}`, 10);
  const min = parseInt(`1${'0'.repeat(n - 1)}`, 10);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
