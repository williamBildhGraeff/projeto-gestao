/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'
import { VPie } from 'vuetify/labs/VPie'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    components: {
      VPie
    },

    theme: {
    themes: {
      light: {
        colors: {
          primary: colors.indigo.darken4, 
          secondary: colors.indigo.darken1,
       
        }
      },
    },
  },
})
