let assert = require("chai").assert;
function sum(arr) {
  let sum = 0;
  for (num of arr)
    sum += Number(num);
  return sum;
}
describe("sum(arr)", function() {
  it("should return 3 for [1, 2]", function() {
        const input = [1,2];
        const result = sum(input);
        assert.equal(result,3);    
  });
  it('should return negative result for array of negative numbers', () => {
    const arr = [-1, -2, -3];
    const expected = -6;
    const actual = sum(arr);
    assert.strictEqual(actual, expected);
  });
  it("should return 1 for [1]", function() {
    const input = [1];
    const result = sum(input);
    assert.equal(result,1);    
});
it("should return 0 for []", function() {
    const input = [];
    const result = sum(input);
    assert.equal(result,0);    
});
it("should return 3 for [1.5,2.5,-1]", function() {
    const input = [1.5,2.5,-1];
    const result = sum(input);
    assert.equal(result,3);    
});
it("should return NaN for invalid data", function() {
    const input = 'invalid data';
    const result = sum(input);
    assert.isNaN(result);    
});
});