const { type } = require('vemsy')

const TemplateDefault = new type.TwigTemplate('default')
const StyleDefault = new type.Style('default.scss')

module.exports = new type.Page('/', TemplateDefault, [], StyleDefault)
