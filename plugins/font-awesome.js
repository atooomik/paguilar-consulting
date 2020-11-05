import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons'

config.showMissingIcons = true

library.add(faBars)

Vue.component('fa-icon', FontAwesomeIcon)
