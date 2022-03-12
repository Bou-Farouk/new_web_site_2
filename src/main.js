import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import "normalize.css";

createApp(App).use(store).use(router).use(BootstrapIconsPlugin).mount("#app");
