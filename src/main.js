import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vSelect from 'vue-select'


library.add(faPhone, faArrowLeft, faTimes, faCheck, faGraduationCap , faPlus)

createApp(App)
   .use(router)
   .component('font-awesome-icon', FontAwesomeIcon)
   .component('v-select', vSelect)
   .mount('#app')
