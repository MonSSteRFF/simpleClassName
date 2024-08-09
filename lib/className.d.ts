type Input = string | undefined | null;
type InputObject = {
    [key: string]: boolean | unknown;
};
type InputFunction = () => InputArray | Input | InputFunction;
type InputArray = (string | undefined | null | InputFunction | InputArray | InputObject)[];
type allInput = Input | InputArray | InputFunction | InputObject | (Input | InputFunction | InputObject)[];
export type t_cn = (...input: allInput[]) => string;
declare class ClassName {
    private getResult;
    cn: t_cn;
}
export default ClassName;
