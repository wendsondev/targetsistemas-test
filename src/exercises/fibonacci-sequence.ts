export const fibonacciSequence = (number: number): string => {
  let a = 0;
  let b = 1;
  let c = 0;

  while (c < number) {
    c = a + b;
    a = b;
    b = c;
  }

  return c === number
    ? `${number} pertence a sequência de Fibonacci`
    : `${number} não pertence a sequência de Fibonacci`;
};
