// const addTwo = (a, b) => {
//     return a + b
// }

const addTwo = require('./external.js')

const subtract = require('./minus.js')

const total = subtract(10,5)
console.log(total)