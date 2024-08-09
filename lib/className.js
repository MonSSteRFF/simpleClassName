class ClassName {
    getResult = (inputValue) => {
        if (typeof inputValue === 'string' && inputValue)
            return [inputValue];
        if (typeof inputValue === 'function')
            return this.getResult(inputValue());
        if (Array.isArray(inputValue))
            return inputValue.flatMap(this.getResult);
        if (typeof inputValue === 'object' && inputValue)
            return Object.keys(inputValue).filter(key => inputValue[key]);
        return [];
    };
    cn = (...input) => {
        return input.flatMap(this.getResult).join(' ');
    };
}
export default ClassName;
