/*---------------------------------------------------------
 * Copyright (C) upcwangying.com. All rights reserved.
 *--------------------------------------------------------*/
const nameRegex = /^[a-z0-9][a-z0-9\-]*$/i

module.exports.validateProjectName = function(name) {
  if (!name) {
    return 'Missing extension identifier'
  }

  if (!nameRegex.test(name)) {
    return 'Invalid extension identifier'
  }

  return true
}

module.exports.validateNonEmpty = function(name) {
  return name && name.length > 0
}
