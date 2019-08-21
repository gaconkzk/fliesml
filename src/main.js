import * as riot from 'riot'
import app from './app.riot'
const mountApp = riot.component(app)

mountApp(
  document.getElementById('app')
)
