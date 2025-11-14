/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import formatDate from '@/utils/formatDate'
import VueTheMask from 'vue-the-mask'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueTheMask)

  app.config.globalProperties.$formatDate = formatDate
}
