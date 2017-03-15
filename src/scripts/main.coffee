window.jQuery = window.$ = require('jquery')
window.jade = require('./lib/pug-runtime')

attachFastClick = require('fastclick')

data = require('./data/data')

require('./lib/component')
require('./lib/slick')

ga = require('./ga')

require('./components/krpano')
require('./components/files')
require('./components/share-btn')
require('./components/header')
require('./components/slider')


attachFastClick(document.body)
$(document).ready ->

  Component.vitalize()