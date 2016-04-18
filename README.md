# combine-properties

Generates all possible objects (combinations of property values).

## Installation

```bash
npm i combine-properties --save
```

## Usage

```js
var combine = require('combine-properties')
var result = combine({
	a: [1, 2, 3],
	b: ['a', 'b']
})
// result[0] === { a: 1, b: 'a' }
// result[1] === { a: 2, b: 'a' }
// result[2] === { a: 3, b: 'a' }
// result[3] === { a: 1, b: 'b' }
// result[4] === { a: 2, b: 'b' }
// result[5] === { a: 3, b: 'b' }
```

## License

MIT
