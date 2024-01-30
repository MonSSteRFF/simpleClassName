import {cn, exploreArray, exploreFunction, getArray, getResult, isExist} from './className';

describe('className.ts', () => {
  it('getArray should handle string and array input', () => {
    expect(getArray('test')).toEqual(['test']);
    expect(getArray(['test1', 'test2'])).toEqual(['test1', 'test2']);
  });

  it('isExist should handle null, undefined and empty string', () => {
    expect(isExist(null)).toEqual([]);
    expect(isExist(undefined)).toEqual([]);
    expect(isExist('')).toEqual([]);
    expect(isExist('test')).toEqual(['test']);
  });

  it('exploreFunction should handle function input', () => {
    expect(exploreFunction(() => ['test1', 'test2'])).toEqual(['test1', 'test2']);
  });

  it('exploreArray should handle array input', () => {
    expect(exploreArray(['test1', () => ['test2']])).toEqual(['test1', 'test2']);
  });

  it('getResult should handle all types of input', () => {
    expect(getResult('test1')).toEqual(['test1']);
    expect(getResult(['test2'])).toEqual(['test2']);
    expect(getResult(() => ['test3'])).toEqual(['test3']);
  });

  it('should handle string input', () => {
    expect(cn('test')).toBe('test');
  });

  it('should handle array input', () => {
    expect(cn(['test1', 'test2'])).toBe('test1 test2');
  });

  it('should handle function input', () => {
    expect(cn(() => ['test1', 'test2'])).toBe('test1 test2');
  });

  it('should handle complex array input', () => {
    expect(cn(['test1', () => ['test2']])).toBe('test1 test2');
  });

  it('should handle multiple inputs', () => {
    expect(cn('test1', ['test2'], () => ['test3'])).toBe('test1 test2 test3');
  });

  it('should handle null, undefined and empty string', () => {
    expect(cn(null)).toBe('');
    expect(cn(undefined)).toBe('');
    expect(cn('')).toBe('');
  });
});
