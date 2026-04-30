// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')


// import { createApp } from 'vue'
// import App from './App.vue'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { library } from "@fortawesome/fontawesome-svg-core";


// createApp(App)
//   .component("font-awesome-icon", FontAwesomeIcon)
//   .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

//FontAwesome 추가
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// bootstrap 추가
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

library.add(
  fas
  , far
  , fab
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
