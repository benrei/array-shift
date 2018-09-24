# array-shift
[![NPM version](https://img.shields.io/npm/v/array-shift.svg)](https://www.npmjs.com/package/array-shift)

Shifts array element up, down or custom

## Installation

```sh
$ npm install array-shift
```

## Usage
```js
let arrayShift = require('array-shift');

let arr = [1,2,3,4,5];
//  up(array, index)
arrayShift.down(arr, 0);
console.log(arr); // -> [2,1,3,4,5]

//  down(array, index)
arrayShift.up(arr, 0);
console.log(arr); // -> [1,2,3,4,5]

//  custom(array, fromIndex, toIndex)
arrayShift.custom(arr, 0, 4)
console.log(arr); // -> [2,3,4,5,1]

```


## License

  [MIT](LICENSE)
