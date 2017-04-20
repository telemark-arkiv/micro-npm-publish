'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { json, send } = require('micro')
const repackData = require('./lib/repack-data')
const getPkg = require('./lib/get-pkg')
const publish = require('./lib/publish')

module.exports = async (request, response) => {
  if (request.method === 'POST') {
    let data = repackData(await json(request))
    const pkg = await getPkg(data)
    data.pkg = pkg
    const published = await publish(data)
    const result = {
      action: published.action !== 'nothing',
      log: published.log || '',
      data: data
    }
    send(response, 200, result)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
