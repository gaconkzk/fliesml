import { register } from 'riot'

import homepage from '../pages/home-page.pug'
import melpage from '../pages/mel-page.pug'

register('home-page', homepage)
register('mel-page', melpage)

export const routes = [
  {path: '/', component: 'home-page' },
  {path: '/mel', component: 'mel-page' },
]
