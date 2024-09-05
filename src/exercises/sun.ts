export const sun = (): number => {
  let index = 12;
  let sum = 0;
  let k = 1;

  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }

  return sum;
};
