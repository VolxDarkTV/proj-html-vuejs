import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass,  faCartShopping, faAngleRight, faPlay} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons'


/* add icons to the library */
library.add(faMagnifyingGlass, faCartShopping, faAngleRight, faFacebookF, faYoutube, faPlay)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
