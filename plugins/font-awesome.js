import Vue from 'vue'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faEye,
  faHome,
  faClock,
  faCalendar,
  faChevronRight,
  faUniversity,
  faEnvelope,
  faMobileAlt,
  faNewspaper

} from '@fortawesome/free-solid-svg-icons'

library.add(
  faBars,
  faEnvelope,
  faWhatsapp,
  faEye,
  faHome,
  faClock,
  faCalendar,
  faChevronRight,
  faLinkedin,
  faUniversity,
  faMobileAlt,
  faNewspaper
)

config.showMissingIcons = true

Vue.component('FaIcon', FontAwesomeIcon)
