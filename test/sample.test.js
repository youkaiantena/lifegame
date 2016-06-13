import assert from "assert"
import testF  from "../src/test"

describe('test.js', () => {
  describe('default', () => {
    it('should return 0 when the value is 1', () => {
      assert.equal(0, testF(1))
      assert.equal(0, testF(2))
    })
  })
})
