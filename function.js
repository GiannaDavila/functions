// const addTwo = (a, b) => {
//     return a + b
// }

const addTwo = require('./external.js')

console.log('non of this misus stuff')

const sum = addTwo(3,4)
console.log(sum)
const subtract = require('./minus.js')

const total = subtract(10,5)
console.log(total)
