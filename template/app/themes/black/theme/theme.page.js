const { type } = require('vemsy')

const TemplateDefault = new type.TwigTemplate('root')

module.exports = new type.Page('/theme', TemplateDefault)
