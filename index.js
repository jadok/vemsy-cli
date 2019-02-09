#!/usr/bin/env node

const chalk = require('chalk')
const program = require('commander')

const current_dir = process.cwd()
const packageJson = require('./package.json')

const copyFolder = require('./src/copy.js')
const install = require('./src/install.js')

program
  .version(packageJson.version)
  .command('new <project>')
  .alias('n')
  .description('init project')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .option('-y, --yes', 'default setup')
  .option('-r, --root <root>', 'the root folder', current_dir)
  .option('-v, --verbose')
  .action((project, cmd) => {
    if (cmd.verbose) {
      console.log('Project: ', project)
      console.log('Default: ', cmd.yes)
      console.log('Verbose: ', cmd.verbose)
      console.log('Dir:', cmd.root)
    }
    console.log(`creating a new Vemsy app in ${chalk.blue(current_dir + '/' + project)}`)
    copyFolder(project, cmd)
      .then(install)
  })

program.parse(process.argv)
