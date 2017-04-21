'use strict'

const fs = require('fs')
const data = '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' // eslint-disable-line no-template-curly-in-string

fs.writeFileSync('.npmrc', data)
