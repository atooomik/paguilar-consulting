import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

config.showMissingIcons = true

library.add(faBars, faEnvelope, faWhatsapp)

Vue.component('fa-icon', FontAwesomeIcon)
