// Multiply by 5
// [5, 3, 9] -> [25, 15, 45]

function times5(x) {
  return x.map(value => (value * 5))
}

// farenheit to celcius
// [23, 140, 212, 41] -> [-5, 60, 100, 5]
// (F − 32) × 5/9 = C

function getCelsius(farenheit) {
  return farenheit.map(value => (value -32) * 5/9)
}

// 
// [23, 140, 212, 41] -> [-5, 60, 100, 5]

function extendString(input) {
  return (input + input)
}

module.exports = {
  times5,
  getCelsius,
  extendString
};