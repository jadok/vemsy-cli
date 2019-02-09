const chalk = require('chalk')
const execa = require('execa')
const path = require('path')

const install = async ({ project, options }) => {
  console.log('Installing dependencies')
  try {
    process.chdir(path.join(options.root, project))
    await execa.shell('npm install').stdout.pipe(process.stdout)
    return { project, options }
  }
  catch (err) {
    console.log(chalk.red(err))
    process.chdir(options.root)
  }
}
module.exports = install
