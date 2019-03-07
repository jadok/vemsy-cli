const { type } = require('vemsy')

const TemplateDefault = new type.Template('default')

module.exports = new type.Page('/', TemplateDefault)
