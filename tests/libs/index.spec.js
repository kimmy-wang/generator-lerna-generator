const { isPluginId, isRequired } = require('../../libs/validators')
const assert = require('assert')

describe('#isPluginId()', function() {
  it('should return true when the value is not present', function(done) {
    assert.equal(isPluginId('lerna-demo'), true)
    done()
  })

  it('should return false when the value is not present', function(done) {
    assert.equal(isPluginId('lernaDemo'), false)
    done()
  })
})

describe('#isRequired()', function() {
  it('should return true when the value is present', function(done) {
    assert.equal(isRequired('lerna'), true)
    done()
  })

  it('should return false when the value is empty', function(done) {
    assert.equal(isRequired(''), false)
    done()
  })

  it('should return false when the value is null', function(done) {
    assert.equal(isRequired(), false)
    done()
  })
})
