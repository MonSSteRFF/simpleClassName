type Input = string | undefined | null;
type InputObject = {[key: string]: boolean | unknown};
type InputFunction = () => InputArray | Input | InputFunction;
type InputArray = (string | undefined | null | InputFunction | InputArray | InputObject)[];

type allInput = Input | InputArray | InputFunction | InputObject | (Input | InputFunction | InputObject)[];
export type t_cn = (...input: allInput[]) => string;

class ClassName {

  private exploreString = (i: Input): string[] => (i === null || i === undefined || i === '' ? [] : [i]);

  private exploreFunction = (i: InputFunction): string[] => {
    const result = i();
    if (result === null || result === undefined) {
      return [];
    } else {
      return this.getResult(result);
    }
  };

  private exploreArray = (i: InputArray): string[] => {
    const res: string[] = [];
    i.forEach((arrayItem) => {
      this.getResult(arrayItem).forEach((item) => {
        res.push(item);
      });
    });
    return res;
  };

  private exploreObject = (i: InputObject): string[] => {
    const result: string[] = [];

    Object.keys(i).forEach(item => {
      if (i[item]){
        result.push(item);
      }
    })

    return result;
  }

  private getResult = (inputValue: allInput): string[] => {
    if (typeof inputValue === 'string') {
      return this.exploreString(inputValue);
    }
    if (typeof inputValue === 'function') {
      return this.exploreFunction(inputValue);
    }

    if (Array.isArray(inputValue)) {
      return this.exploreArray(inputValue);
    }

    if (typeof inputValue === 'object' && inputValue !== null) {
      return this.exploreObject(inputValue);
    }

    return [];
  }

  public cn: t_cn = (...input) => {
    return input.flatMap(this.getResult).join(' ');
  };
}

export default ClassName;
