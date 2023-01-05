export const Unique = (array: any[], key: string) => {
  let flags = [],
    output = [];
  for (let i = 0; i < array.length; i++) {
    if (flags[array[i][key]]) continue;
    flags[array[i][key]] = true;
    output.push(array[i]);
  }
  return output;
};
