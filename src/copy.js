const copy = require('recursive-copy')
const path = require('path')
const fs = require('fs')

const fodlerName = 'template'

const copyFolder = (project, cmd) => new Promise((resolve, reject) => {

  const options = {
    overwrite: true,
    expand: true,
    dot: true,
    junk: true
  };
  
  copy(fodlerName, path.join(process.cwd(), project), options)
    .on(copy.events.COPY_FILE_START, (copyOperation) => {
      if (cmd.verbose) {
        console.info('Copying file ' + copyOperation.src + '...')
      }
    })
    .on(copy.events.COPY_FILE_COMPLETE, function(copyOperation) {
      if (cmd.verbose) {
        console.info('Copied to ' + copyOperation.dest)
      }
    })
    .on(copy.events.ERROR, (error, copyOperation) => {
      console.error('Unable to copy ' + copyOperation.dest, error)
      reject(error)
    })
    .then((results) => {
      console.info(results.length + ' file(s) copied')
      resolve()
    })
    .catch((error) => {
      console.error('Copy failed: ' + error);
      reject(error)
    })
})

module.exports = copyFolder
