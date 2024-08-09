type Input = string | undefined | null;
type InputObject = {[key: string]: boolean | unknown};
type InputFunction = () => InputArray | Input | InputFunction;
type InputArray = (string | undefined | null | InputFunction | InputArray | InputObject)[];

type allInput = Input | InputArray | InputFunction | InputObject | (Input | InputFunction | InputObject)[];
export type t_cn = (...input: allInput[]) => string;

class ClassName {
  private getResult = (inputValue: any): string[] => {
    if (typeof inputValue === 'string' && inputValue) return [inputValue];
    if (typeof inputValue === 'function') return this.getResult(inputValue());
    if (Array.isArray(inputValue)) return inputValue.flatMap(this.getResult);
    if (typeof inputValue === 'object' && inputValue) return Object.keys(inputValue).filter(key => inputValue[key]);
    return [];
  };

  public cn: t_cn = (...input) => {
    return input.flatMap(this.getResult).join(' ');
  };
}

export default ClassName;
