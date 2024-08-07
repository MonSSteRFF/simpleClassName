# simpleClassName
simple library for ClassName in react/react-native applications\
can use with javascript or typescript

[npm](https://www.npmjs.com/package/simple-class-name)\
[github](https://github.com/MonSSteRFF/simpleClassName)

## Install

```bash
npm i simple-class-name
```
and just use
```js
import cn from 'simple-class-name';
```

## Docs

import the cn function from the library and use it in your react components\
can be used with multiple params, arrays, functions, objects, and included arrays\
that's all, just use simple class name

##
#### Example.scss
```scss
.testDiv {
  background-color: green;
  &.active{
    background-color: red;
  }
}
```

##
#### Example.tsx
```js
import styles from './Example.scss'
import cn from "simple-class-name";

const Example = () => {
  const isActive = false // or another state
  
  return (
    <>
      <div className={cn(styles.testDiv)}></div>
      <div className={cn(styles.testDiv, styles.active)}></div>
      <div className={cn([styles.testDiv, styles.active])}></div>
      <div className={cn(isActive ? [styles.testDiv, styles.active] : styles.testDiv)}></div>
      <div className={cn({[styles.testDiv]: isActive, testClass: true})}></div>
      <div className={cn(() => styles.testDiv)}></div>
    </>
  );
};
```



# LICENSE

MIT License

Copyright (c) 2024 Vladislav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
