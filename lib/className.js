class ClassName {
    exploreString = (i) => (i === null || i === undefined || i === '' ? [] : [i]);
    exploreFunction = (i) => {
        const result = i();
        if (result === null || result === undefined) {
            return [];
        }
        else {
            return this.getResult(result);
        }
    };
    exploreArray = (i) => {
        const res = [];
        i.forEach((arrayItem) => {
            this.getResult(arrayItem).forEach((item) => {
                res.push(item);
            });
        });
        return res;
    };
    exploreObject = (i) => {
        const result = [];
        Object.keys(i).forEach(item => {
            if (i[item]) {
                result.push(item);
            }
        });
        return result;
    };
    getResult = (inputValue) => {
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
    };
    cn = (...input) => {
        return input.flatMap(this.getResult).join(' ');
    };
}
export default ClassName;
