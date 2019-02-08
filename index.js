#!/usr/bin/env node

const envinfo = require('envinfo')
const chalk = require('chalk')
const fs = require('fs-extra')
const program = require('commander')

const current_dir = process.cwd()
const packageJson = require('./package.json')

const copyFolder = require('./src/copy.js')
// envinfo.run(
//   {
//     System: ['OS', 'CPU', 'Memory'],
//     Binaries: ['Node', 'npm'],
//     Browsers: ['Chrome', 'Firefox', 'Safari'],
//   },
//   { json: true, console: true, showNotFound: true }
// )

// const program = new commander.Command(packageJson.name)
//   .version(packageJson.version)
//   .arguments('<project-directory>')
//   //.usage(`${chalk.green('<project-directory>')} [options]`)
//   .option('-t', '--template <template>', 'specify a project template (complete|custom) [complete]', 'complete')
//   .action(name => console.log('Action', name, commander.template))
//   .parse(process.argv)


program
  .version(packageJson.version)
  .command('new <project>')
  .alias('n')
  .description('init project')
  .option('-u, --username <username>', 'The user to authenticate as')
  .option('-p, --password <password>', 'The user\'s password')
  .option('-y, --yes', 'default setup')
  .option('-v, --verbose')
  .action((project, cmd) => {
    console.log('Project: ', project)
    console.log('Default: ', cmd.yes)
    console.log('Verbose: ', cmd.verbose)
    copyFolder(project, cmd)
  })

program.parse(process.argv)
