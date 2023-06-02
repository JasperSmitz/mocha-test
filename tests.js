const chai = require('chai');
const expect = chai.expect;

const problems = require('./problems'); 


describe('times5', () => {
  it('Multiplies array of integers by 5', () => {
    expect(problems.times5([5, 3, 9])).to.deep.equal([25, 15, 45])
    expect(problems.times5([1, 0, 7])).to.deep.equal([5, 0, 35])
  })
})

describe('getCelsius', () => {
  it('Converts farenheit to celsius in an array', () => {
    expect(problems.getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(problems.getCelsius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
  })
})

describe('extendString', () => {
  it('doubles the input', () => {
    expect(problems.extendString("hallo")).to.deep.equal("hallohallo")
    expect(problems.extendString("s")).to.deep.equal("ss")
  })
})