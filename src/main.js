import * as riot from 'riot'
import mainApp from './app.pug'
const mountApp = riot.component(mainApp)

import 'normalize.css'

mountApp(
  document.getElementById('app')
)
