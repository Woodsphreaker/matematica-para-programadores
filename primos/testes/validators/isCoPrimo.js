const getAllDivisors = require('../helpers/getAllDivisors.js')

const flatten = (a, b) => {
  return a.concat(b);
}
const count = (names) => 
  names.reduce((a, b) => 
    Object.assign(a, {[b]: (a[b] || 0) + 1}), {})

const duplicates = (dict) => 
  Object.keys(dict).filter((a) => dict[a] > 1)


const test = (arr) => {

  const flat = arr.map(getAllDivisors).reduce(flatten, [])
  return (duplicates(count(flat)).length === 1) 
}

module.exports = test

// console.log('testa', test([20, 21]))

