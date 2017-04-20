'use strict'

const {exec} = require('child_process')

module.exports = data => {
  return new Promise(async (resolve, reject) => {
    const repo = data.tarBallUrl
    if (!data.pkg.private && data.action === 'published') {
      exec(`npm publish ${repo}`, (error, stdout, stderr) => {
        if (error) {
          reject(error)
        } else {
          const result = {
            action: 'published',
            log: stdout.toString().trim(),
            success: true
          }
          resolve(result)
        }
      })
    } else {
      const result = {
        action: 'nothing'
      }
      resolve(result)
    }
  })
}
