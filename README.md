# con-type
Generate and parse HTTP Content-Type header according to RFC 7231. This module can parse invalid mime type without breaking. You can obtain mime type and charset if available

## Installation

```sh
$ npm install con-type
```

## API

```js
var contentType = require('con-type')
```
### contentType.parse(string )

Example of sites with invalid content-type: www.aol.com "text/html;;charset=utf-8". Note the double semicolon ";;"
```js
var obj = contentType.parse('text/html;;charset=utf-8')
```
Two objects will always be returned 
the above example will output 
```js
console.log(obj.type)
```
text/html
```js
console.log(obj.charset)
```
utf-8

in the case where the charset is not available, the output will be a null
Example:
```js
var obj = contentType.parse('text/html;;')
```
```js
console.log(obj.charset)
```
Will output null


## License

[MIT](LICENSE)

