const copy = require('recursive-copy')
const path = require('path')

const fodlerName = './template'

const copyFolder = (project, options) => new Promise((resolve, reject) => {

  const copyOptions = {
    overwrite: true,
    expand: true,
    dot: true,
    junk: true
  };
  console.log('Initiating folder')
  copy(path.join(__dirname, '..', fodlerName), path.join(process.cwd(), project), copyOptions)
    .on(copy.events.COPY_FILE_START, (copyOperation) => {
      if (options.verbose) {
        console.info('Copying file ' + copyOperation.src + '...')
      }
    })
    .on(copy.events.COPY_FILE_COMPLETE, function(copyOperation) {
      if (options.verbose) {
        console.info('Copied to ' + copyOperation.dest)
      }
    })
    .on(copy.events.ERROR, (error, copyOperation) => {
      console.error('Unable to copy ' + copyOperation.dest, error)
      reject(error)
    })
    .then((results) => {
      console.info(results.length + ' file(s) copied')
      resolve({ project, options })
    })
    .catch((error) => {
      console.error('Copy failed: ' + error);
      reject(error)
    })
})

module.exports = copyFolder
