import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faMagnifyingGlass,  faCartShopping, faAngleRight, faPlay, faWindowRestore, faHeartPulse, faDumbbell, faWeightScale} from '@fortawesome/free-solid-svg-icons'

import { faYoutube, faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(faYoutube, faFacebookF, faTwitter, faInstagram, faLinkedinIn, faMagnifyingGlass, faCartShopping, faAngleRight, faPlay, faWindowRestore, faHeartPulse, faDumbbell, faWeightScale)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
