const index = require('./'); // require the `index.js` file from the same directory.

console.log(index.compress("QmWfQMo49F4YB3H9pCDJsT777TBJdRWYd4oAh2mnvh5jqi"));
console.log(index.compress("QmWfQMo49F4YB3H9pCDJsT777TBJdRWYd4oAh2mnvh5jqi").length);
console.log(index.decompress(index.compress("QmWfQMo49F4YB3H9pCDJsT777TBJdRWYd4oAh2mnvh5jqi")));