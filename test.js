const assert = require('assert')

describe('+', () => {
    it('returns the sum of its arguments', () => {
      // Write assertion here
      assert.ok(3+4===7)
    });
  });
  
// 3 phase best practice approach
describe('.pop', () => {
  it('returns the last element in the array [3phase]', () => {
    // Setup
    const knightString = 'knight';
    const jediPath = ['padawan', knightString];

    // Exercise
    const popped = jediPath.pop();

    // Verify
    assert.ok(popped === knightString);
  });
});
