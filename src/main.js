import * as riot from 'riot'
import mainApp from './app.pug'
const mountApp = riot.component(mainApp)

mountApp(
  document.getElementById('app')
)
