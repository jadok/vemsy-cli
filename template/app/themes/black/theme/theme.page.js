const { type } = require('vemsy')

const TemplateDefault = new type.Template('root')

module.exports = new type.Page('/theme', TemplateDefault)
