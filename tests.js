const chai = require('chai');
const expect = chai.expect;


describe('times5', () => {
  it('Multiplies array of integers by 5', () => {
    expect(times5([5, 3, 9])).to.deep.equal([25, 15, 45])
    expect(times5([1, 0, 7])).to.deep.equal([5, 0, 35])
  })
})

describe('getCelsius', () => {
  it('Converts farenheit to celsius in an array', () => {
    expect(getCelsius([23, 140, 212, 41])).to.deep.equal([-5, 60, 100, 5])
    expect(getCelsius([-58, -22, -4, 14])).to.deep.equal([-50, -30, -20, -10])
  })
})