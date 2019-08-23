import * as riot from 'riot'
import mainApp from './app.pug'
const mountApp = riot.component(mainApp)

import 'normalize.css'
// import 'bulma/css/bulma.min.css'
// import '@/style/bulmaswatch.min.css'
import '@/style/global.styl'

import '@mojs/core'

mountApp(
  document.getElementById('app')
)
