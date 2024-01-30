const getArray = (i) => (typeof i === 'string' ? [i] : i);
const isExist = (i) => (i === null || i === undefined || i === '' ? [] : getArray(i));
const exploreFunction = (i) => {
    const result = i();
    if (result === null || result === undefined) {
        return [];
    }
    else {
        return getResult(result);
    }
};
const exploreArray = (i) => {
    const res = [];
    i.forEach((arrayItem) => {
        getResult(arrayItem).forEach((item) => {
            res.push(item);
        });
    });
    return res;
};
const getResult = (inputValue) => {
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
const cn = (...input) => {
    return input.flatMap(getResult).join(' ');
};
export { exploreArray, exploreFunction, getArray, getResult, isExist };
export default cn;
