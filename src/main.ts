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

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


library.add(
  faMagnifyingGlass,
  faChevronLeft,
  faBars,
  faDoorOpen,
  faSquarePlus
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
