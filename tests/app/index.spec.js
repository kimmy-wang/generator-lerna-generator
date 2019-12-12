const helpers = require('yeoman-test')
const path = require('path')

describe('generate projects', function() {
  this.timeout(10000)
  it('generate a project', function(done) {
    // The object returned acts like a promise, so return it to wait until the process is done
    helpers
      .run(path.join(__dirname, '../../app'))
      .withOptions({ name: 'lerna-test' }) // Mock options passed in
      .withPrompts({
        author: 'Test Author',
        independent: true,
        pkgManager: 'yarn',
        useWorkspaces: false,
        number: 4,
        gitInit: false,
      }) // Mock the prompt answers
      .toPromise()
      .then(function() {
        console.log('Your project: lerna-test is created.')
        done()
      })
      .catch(function(err) {
        console.error(err)
        done()
      })
  })
})
