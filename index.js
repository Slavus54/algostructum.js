const Algostructum = require('./src/Core')

const algostructum = new Algostructum()

console.log(algostructum.rhombus(3))
console.log(algostructum.qsort([1, 3, 2, 5, 4, 9]))

module.exports = {Algostructum}