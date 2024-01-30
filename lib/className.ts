type Input = string | undefined | null;
type InputArray = Array<string | undefined | null | InputFunction | InputArray>;
type InputFunction = () => InputArray | Input;
type allInput = Input | InputArray | InputFunction | Array<Input | InputArray | InputFunction>;
type t_cn = (...input: allInput[]) => string;

const getArray = (i: string | string[]): string[] => (typeof i === 'string' ? [i] : i);

const isExist = (i: Input): string[] => (i === null || i === undefined || i === '' ? [] : getArray(i));

const exploreFunction = (i: InputFunction): string[] => {
  const result = i();
  if (result === null || result === undefined) {
    return [];
  } else {
    return getResult(result);
  }
};

const exploreArray = (i: InputArray): string[] => {
  const res: string[] = [];
  i.forEach((arrayItem) => {
    getResult(arrayItem).forEach((item) => {
      res.push(item);
    });
  });
  return res;
};

const getResult = (inputValue: allInput): string[] => {
  if (typeof inputValue === 'string') {
    return isExist(inputValue);
  }
  if (typeof inputValue === 'function') {
    return exploreFunction(inputValue);
  }

  if (Array.isArray(inputValue)) {
    return exploreArray(inputValue);
  }

  return [];
};

const cn: t_cn = (...input) => {
  return input.flatMap(getResult).join(' ');
};

export {exploreArray, exploreFunction, getArray, getResult, isExist};
export default cn;
