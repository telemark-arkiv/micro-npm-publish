'use strict'

module.exports = data => {
  return {
    action: data.action,
    tagName: data.release.tag_name,
    user: data.release.author.login,
    pkgUrl: `https://raw.githubusercontent.com/${data.repository.full_name}/master/package.json`,
    tarBallUrl: `${data.repository.html_url}/archive/${data.release.tag_name}.tar.gz`
  }
}
