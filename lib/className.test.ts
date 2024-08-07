import ClassName from './className';

const className = new ClassName();
const cn = className.cn;


describe('className.ts', () => {
  it('should handle string input', () => {
    expect(cn('hello')).toBe('hello');
    expect(cn('')).toBe('');
    expect(cn(undefined)).toBe('');
    expect(cn(null)).toBe('');
  });

  it('should handle function input', () => {
    expect(cn(() => 'hello')).toBe('hello');
    expect(cn(() => '')).toBe('');
    expect(cn(() => undefined)).toBe('');
    expect(cn(() => null)).toBe('');
    expect(cn(() => ['hello', 'world'])).toBe('hello world');
    expect(cn(() => ['hello', null, 'world'])).toBe('hello world');
  });

  it('should handle object input', () => {
    expect(cn({a: true, b: false, c: true})).toBe('a c');
    expect(cn({})).toBe('');
  });

  it('should handle array input', () => {
    expect(cn(['hello', undefined, 'world'])).toBe('hello world');
    expect(cn([null, () => 'hello', {a: true}])).toBe('hello a');
    expect(cn([['nested', 'array'], () => ['with', 'function']])).toBe('nested array with function');
  });

  it('should handle mixed input', () => {
    expect(cn('hello', () => 'world', {a: true}, ['nested', {b: true, c: false}])).toBe('hello world a nested b');
    expect(cn({a: true, b: false}, ['complex', () => 'function', {d: false, e: true}])).toBe('a complex function e');
  });

  it('should handle nested input', () => {
    const nestedFunc = () => ['nested', {key: true}];
    expect(cn(['level1', ['level2', nestedFunc]])).toBe('level1 level2 nested key');
  });

  it('should handle deep nested structures', () => {
    const deepFunc = () => [() => 'deep', {deepKey: true}];
    expect(cn([['very', ['deep', deepFunc]]])).toBe('very deep deep deepKey');
  });
});
