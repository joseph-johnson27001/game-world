import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store"; // Import your Vuex store

const app = createApp(App);

app.use(router); // Add Vue Router
app.use(store); // Add Vuex store

app.mount("#app"); // Mount the application
