const ghpages = require('gh-pages')

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/daylilystudio/meowforest.git' // project github repo
}
const callback = err => {
  if (err) console.error(err)
  else console.log('publish success')
}

/**
 * 將 dist 的內容發佈到 `repo` 的 `gh-pages` 分支。
 */
ghpages.publish('dist', options, callback)
