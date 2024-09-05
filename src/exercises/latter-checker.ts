export const latterChecker = (text: string): string => {
  const a = text.match(/a/gi);

  return a
    ? `A letra 'a' aparece ${a.length} vezes`
    : `A letra 'a' não aparece`;
};
